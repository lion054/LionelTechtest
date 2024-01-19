module.exports = {
  contracts: [
    // List your Solidity files here
    'contracts/InsuranceContract.sol', // Adjust the path as needed
  ],
  libraries: {
    // Specify your external dependencies here
    'ERC721': '@openzeppelin/contracts/token/ERC721/ERC721.sol',
    'ERC721URIStorage': '@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol',
    'Ownable': '@openzeppelin/contracts/access/Ownable.sol',
    'AggregatorV3Interface': '@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol',
    'ILendingPool': '@aave/core-v3/contracts/interfaces/IPool.sol',
    'IERC721WithPermit': '@aave/core-v3/contracts/interfaces/IERC721WithPermit.sol',
  },
  // Add more configurations as needed
};
