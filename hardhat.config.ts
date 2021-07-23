import "@nomiclabs/hardhat-waffle";
// uncomment this to compile vyper contracts
// import "@nomiclabs/hardhat-vyper";
import "@typechain/hardhat";

import { HardhatUserConfig } from "hardhat/config";

const config: HardhatUserConfig = {
  paths: {
    sources: "src",
  },
  // uncomment this to compile vyper contracts.  the version in the file must match.
  // vyper: {
  // CRVPool
  // version: "0.2.12",
  // CRVToken
  //   version: "0.2.8",
  // },
  solidity: {
    compilers: [
      {
        version: "0.5.12",
      },
      {
        version: "0.7.1",
      },
      {
        version: "0.8.0",
      },
    ],
  },
  typechain: {
    outDir: "types",
    target: "ethers-v5",
  },

  networks: {
    hardhat: {
      gas: 1000000000000000000,
      blockGasLimit: 0x1fffffffffffff,
      allowUnlimitedContractSize: true,
    },
    mainnet: {
      url: `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_MAINNET_API_KEY}`,
    },
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${process.env.ALCHEMY_GOERLI_API_KEY}`,
    },
  },
};

export default config;
