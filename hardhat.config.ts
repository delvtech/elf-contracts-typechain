import "@typechain/hardhat";
import "@nomiclabs/hardhat-vyper";

import { HardhatUserConfig } from "hardhat/config";

const config: HardhatUserConfig = {
  paths: {
    sources: process.env.SOURCE_CONTRACTS_PATH,
  },
  solidity: {
    compilers: [
      {
        version: "0.4.24",
      },
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
  vyper: {
    compilers: [
      {
        version: "0.2.0",
      },
      {
        version: "0.2.4",
      },
      {
        version: "0.2.8",
      },
      {
        version: "0.2.12",
      },
    ],
  },
  typechain: {
    outDir: process.env.TYPECHAIN_OUTDIR,
    target: "ethers-v5",
  },
};

export default config;
