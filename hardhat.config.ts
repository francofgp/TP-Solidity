import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import "solidity-coverage";
import "hardhat-gas-reporter";
import { HardhatUserConfig } from "hardhat/config";

const ALCHEMY_URL = 'https://eth-rinkeby.alchemyapi.io/v2/ip1Q0Lo4I1REBJNbkjIfxYFQ7JQGRtz0'
const PRIVATE_KEY = '6e0bd14d99921119a8daf3cd2c85a429b3b3fccae925982d13b98b1dbff23b80'
const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  solidity: {
    compilers: [{ version: "0.8.1", settings: {} }],
  },
  networks: {
    hardhat: {},
    localhost: {},
    coverage: {
      url: "http://127.0.0.1:8555", // Coverage launches its own ganache-cli client
    },
    rinkeby: {
      url: ALCHEMY_URL,
      accounts: [`0x${PRIVATE_KEY}`],
      gasPrice: 8000000000
      }      
  }
};

export default config
