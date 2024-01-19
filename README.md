# InsurancePolicy Smart Contract

## Overview

This Ethereum smart contract, named `InsurancePolicy`, is designed to facilitate the creation, purchase, and claiming of insurance policies using the ERC-721 token standard. The insurance policies are associated with positions in the Aave lending protocol and are represented as non-fungible tokens (NFTs).

## Dependencies

- [OpenZeppelin Contracts](https://github.com/OpenZeppelin/openzeppelin-contracts): Utilized for ERC-721 token implementation, ownership management, and URI storage.
- [Chainlink Oracle](https://docs.chain.link/docs/using-chainlink-reference-contracts): Interfacing with Chainlink Oracle to obtain real-time price data.
- [Aave Protocol V3](https://github.com/aave/aave-protocol): Integration with Aave lending protocol for tracking user positions.

## Contract Structure

### ERC-721 Implementation

- The contract inherits from `ERC721URIStorage` and `Ownable` from OpenZeppelin Contracts.
- The NFT token is named "InsurancePolicy" with the symbol "INSURANCE."

### Aave and Chainlink Integration

- The contract interfaces with Aave's lending pool and Aave interest-bearing token (aToken).
- Utilizes Chainlink Oracle for obtaining real-time price data to calculate position health.

### Insurance Policies and Positions

- Each insurance policy is represented by an ERC-721 token.
- Positions, associated with user addresses, store details such as lent amount, borrowed amount, and total insured amount.

## Functions

### Constructor

- Initializes the contract with necessary addresses, including Chainlink Oracle, Aave Lending Pool, Aave interest-bearing token, and an initial owner.

### `getInsuranceAmount(uint256 tokenId)`

- Retrieves the insured amount from the token metadata.

### `purchaseInsurance(uint256 insuredAmount)`

- Allows users to purchase insurance by minting a new insurance NFT.
- Validates input, deducts the insurance fee, and emits an `InsurancePurchased` event.

### `claimInsurance(uint256 tokenId)`

- Allows users to claim insurance by transferring the claimed amount after deducting the claim fee.
- Validates ownership of the token, checks available funds, and emits an `InsuranceClaimed` event.

### `setOracleMockResponse(uint256 _mockResponse)`

- Only accessible by the owner, sets a mock response for the Chainlink Oracle for testing purposes.

### `getLatestPrice()`

- Returns the latest price from the Chainlink Oracle for testing purposes.

### `totalSupply()`

- Returns the total supply of insurance NFTs.

## Internal Functions

### `_deductFee(uint256 totalFee)`

- Deducts the fee from the user's balance and transfers it to the contract owner.

### `_mintInsuranceNFT(address user, uint256 insuredAmount)`

- Mints a new insurance NFT and assigns it to the user.

### `_calculateClaimAmount(uint256 tokenId)`

- Calculates the claim amount based on the position health, insured amount, and the latest price from the Chainlink Oracle.

### `_setInsuranceAmount(uint256 tokenId, uint256 insuredAmount)`

- Sets the insured amount in the token metadata and returns the updated value.

## Events

- `InsurancePurchased(address indexed user, uint256 insuredAmount)`: Emitted when an insurance policy is purchased.
- `InsuranceClaimed(address indexed user, uint256 claimedAmount)`: Emitted when an insurance claim is made.




**Testing**

// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import "../src/Counter.sol";

contract CounterTest is Test {
    Counter public counter;
    address public owner;

    function setUp() public {
        // Deploy the Counter and set up necessary accounts
        owner = address(this);
        counter = new Counter(
            address(0x022EEA14A6010167ca026B32576D6686dD7e85d2),
            address(0x794a61358D6845594F94dc1DB02A252b5b4814aD),
            address(0xDB8266d95Bc9E1b4C1440501Fae90838381a9156),
            owner
        );
    }

    function testPurchaseInsurance() public {
        uint256 insuredAmount = 1 ether;

        // For simplicity, we set the oracle price to 1000 (1 ETH = 1000 USD)
        counter.setOracleMockResponse(1000);

        // Purchase insurance through Counter contract
        counter.purchaseInsurance{value: insuredAmount}(insuredAmount);

        // Check the owner has the correct balance of insurance NFTs
        assertEq(counter.balanceOf(owner), 1);

        // Check the insured amount is stored correctly in the NFT metadata
        uint256 tokenId = getLastTokenId(owner);
        assertEq(counter.getInsuranceAmount(tokenId), insuredAmount);
    }

    function testClaimInsurance() public {
        uint256 insuredAmount = 1 ether;

        // For simplicity, we set the oracle price to 1000 (1 ETH = 1000 USD)
        counter.setOracleMockResponse(1000);

        // Purchase insurance through Counter contract
        counter.purchaseInsurance{value: insuredAmount}(insuredAmount);

        // Claim insurance
        uint256 tokenId = getLastTokenId(owner);
        counter.claimInsurance(tokenId);

        // Check the owner no longer owns the insurance NFT
        assertEq(counter.balanceOf(owner), 0);
    }

    // Helper function to get the last token ID owned by the owner
    function getLastTokenId(address owner) internal view returns (uint256) {
        uint256 tokenBalance = counter.balanceOf(owner);
        require(tokenBalance > 0, "Owner has no tokens");
        return counter.tokenOfOwnerByIndex(owner, tokenBalance - 1);
    }
}
