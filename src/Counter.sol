// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@aave/core-v3/contracts/interfaces/IPool.sol";
import "@aave/core-v3/contracts/interfaces/IERC20.sol";
import "@aave/core-v3/contracts/interfaces/ILendingPool.sol";
import "../lib/chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract Counter is ERC721URIStorage, Ownable {
    using Strings for uint256;

    AggregatorV3Interface private oracle; // Chainlink Oracle interface
    ILendingPool private lendingPool; // Aave Lending Pool interface
    IERC721 private aToken; // Aave interest-bearing token interface

    uint256 private constant INSURANCE_FEE = 0.01 ether; // Insurance fee
    uint256 private constant CLAIM_FEE = 0.01 ether; // Claim fee

    uint256 private oracleMockResponse; // Mock response for Chainlink Oracle (for testing)

    uint256 private _totalSupply; // Variable to store the total supply of tokens

    // Struct to store position details
    struct Position {
        uint256 lentAmount;
        uint256 borrowedAmount;
        uint256 totalInsured;
        address userAddress;
    }

    // Mapping to store positions by user address
    mapping(address => Position) public positions;

    // Event emitted when an insurance policy is purchased
    event InsurancePurchased(address indexed user, uint256 insuredAmount);

    // Event emitted when an insurance claim is made
    event InsuranceClaimed(address indexed user, uint256 claimedAmount);

   constructor(
    address _oracleAddress,
    address _lendingPoolAddress,
    address _aTokenAddress,
    address _initialOwner
				)
	ERC721("InsurancePolicy", "INSURANCE") Ownable(_initialOwner) {
   
        oracle = AggregatorV3Interface(_oracleAddress);
        lendingPool = ILendingPool(_lendingPoolAddress);
        aToken = IERC721(_aTokenAddress);
    }
	
// Function to get the insured amount from the token metadata
function getInsuranceAmount(uint256 tokenId) external view returns (uint256) {
    require(_exists(tokenId), "Token does not exist");
    require(_exists(tokenId), "Token does not exist"); {
        require(_exists(tokenId), "Token does not exist");
        string memory tokenURI = tokenURI(tokenId);
        uint256 delimiterIndex = bytes(tokenURI).length;

        // Find the delimiter "|" in the token URI
        for (uint256 i = bytes(tokenURI).length - 1; i > 0; i--) {
            if (bytes(tokenURI)[i] == bytes("|")[0]) {
                delimiterIndex = i;
                break;
            }
        }

        // Extract the insured amount from the token URI
        string memory insuredAmountStr = substring(tokenURI, delimiterIndex + 1, bytes(tokenURI).length - delimiterIndex - 1);
        return parseInt(insuredAmountStr);
    }

    // Function to extract a substring from a string
    function substring(string memory str, uint256 startIndex, uint256 length) internal pure returns (string memory) {
        bytes memory strBytes = bytes(str);
        require(startIndex + length <= strBytes.length, "Invalid substring range");

        bytes memory result = new bytes(length);
        for (uint256 i = 0; i < length; i++) {
            result[i] = strBytes[startIndex + i];
        }

        return string(result);
    }


    // Modifier to check if the position exists
    modifier positionExists(address user) {
        require(positions[user].userAddress != address(0), "Position does not exist");
        _;
    }

    // Function to set the Oracle mock response (for testing purposes)
    function setOracleMockResponse(uint256 _mockResponse) external onlyOwner {
        oracleMockResponse = _mockResponse;
    }

    // Function to get the latest price from the Chainlink Oracle (for testing purposes)
    function getLatestPrice() external view returns (int256) {
        return int256(oracleMockResponse);
    }

    function purchaseInsurance(uint256 insuredAmount) external payable {
        // Validate input and perform necessary checks
        require(insuredAmount > 0, "Insured amount must be greater than zero");
        require(insuredAmount <= positions[msg.sender].lentAmount, "Insured amount exceeds lent amount");

        // Calculate the insurance fee
        uint256 totalFee = INSURANCE_FEE;

        // Validate that the user has sent enough value to cover the fee
        require(msg.value >= totalFee, "Insufficient funds to purchase insurance");

        // Purchase insurance
        // Deduct the insurance fee from the user's balance
        uint256 feeAmount = _deductFee(totalFee);

        // Mint the insurance NFT representing the policy
        uint256 tokenId = _mintInsuranceNFT(msg.sender, insuredAmount);

        // Store the policy details in the NFT metadata
        _setNFTMetadata(tokenId, insuredAmount);

        // Emit the InsurancePurchased event
        emit InsurancePurchased(msg.sender, insuredAmount);
    }

    function claimInsurance(uint256 tokenId) external positionExists(msg.sender) {
        // Validate that the token belongs to the claimer
        require(ownerOf(tokenId) == msg.sender, "You don't own this token");

        
        // Calculate the amount to be claimed based on position health and insured amount
        uint256 claimedAmount = _calculateClaimAmount(tokenId);

        // Calculate the claim fee
        uint256 totalFee = CLAIM_FEE;

        // Validate that the user has enough funds to cover the fee
        require(address(this).balance >= totalFee, "Insufficient funds to claim insurance");

        // Deduct the claim fee from the claimed amount
        uint256 amountAfterFee = claimedAmount - totalFee;

        // Transfer the claimed amount to the user's address
        payable(msg.sender).transfer(amountAfterFee);

        // Emit the InsuranceClaimed event
        emit InsuranceClaimed(msg.sender, claimedAmount);
    }

    // Internal function to deduct the fee from the user's balance
    function _deductFee(uint256 totalFee) internal returns (uint256) {
        // Transfer the fee amount to the contract owner's address
        uint256 feeAmount = totalFee;
        payable(owner()).transfer(feeAmount);
        return feeAmount;
    }

    // Internal function to mint the insurance NFT
    function _mintInsuranceNFT(address user, uint256 insuredAmount) internal returns (uint256) {
        // Generate a new token ID
        _totalSupply += 1;
        uint256 newTokenId = _totalSupply;

        // Mint the NFT and assign it to the user
        _safeMint(user, newTokenId);

        // Return the new token ID
        return newTokenId;
    }

    // Internal function to convert string to integer
    function parseInt(string memory _value) internal pure returns (uint256) {
    bytes memory b = bytes(_value);
    uint256 result = 0;
    for (uint256 i = 0; i < b.length; i++) {
        if (uint8(b[i]) >= 48 && uint8(b[i]) <= 57) {
            result = result * 10 + (uint256(uint8(b[i])) - 48);
        }
    }
    return result;
	}


    // Internal function to set the metadata of the insurance NFT
    function _setNFTMetadata(uint256 tokenId, uint256 insuredAmount) internal {
        // Generate the token URI
        string memory tokenURI = string(abi.encodePacked("ipfs://", tokenId.toString()));

        // Set the token URI for the NFT
        _setTokenURI(tokenId, tokenURI);

        // Store the insured amount in the token metadata
        _setInsuranceAmount(tokenId, insuredAmount);
    }

    // Internal function to calculate the claim amount
  function _calculateClaimAmount(uint256 tokenId) internal returns (uint256) {
 
    // Get the insured amount from the token metadata
    uint256 insuredAmount = _setInsuranceAmount(tokenId, positions[msg.sender].totalInsured);

    

        // Get the latest price from the Chainlink Oracle
        (, int256 latestPrice, , , ) = oracle.latestRoundData();

        // Calculate the position health based on the latest price and borrowed amount
        uint256 positionHealth = (positions[msg.sender].borrowedAmount * uint256(latestPrice)) / insuredAmount;

        // Calculate the claim amount based on the position health and insured amount
        uint256 claimAmount = (positionHealth * insuredAmount) / 100;

        return claimAmount;
    }



		// Internal function to set the insured amount in the token metadata
		function _setInsuranceAmount(uint256 tokenId, uint256 insuredAmount) internal returns (uint256) {
			// Get the existing token URI
			string memory tokenURI = tokenURI(tokenId);

			// The insured amount followed by "|" to the existing URI
			string memory newTokenURI = string(abi.encodePacked(insuredAmount.toString(), "|", tokenURI));

			// Set the updated token URI for the NFT
			_setTokenURI(tokenId, newTokenURI);

			// Return the insured amount
			return insuredAmount;
		}
		
		


    // Function to get the total supply of tokens
    function totalSupply() external view returns (uint256) {
        return _totalSupply;
    }
}
