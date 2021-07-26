import "@nomiclabs/hardhat-ethers";

import { HardhatUserConfig } from "hardhat/config";

const config: HardhatUserConfig = {
  paths: {
    sources: "src",
  },
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

  networks: {
    mainnet: {
      url: `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_MAINNET_API_KEY}`,
    },
  },
};

export default config;
