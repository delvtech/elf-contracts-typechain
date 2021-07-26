"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("@typechain/hardhat");
const config = {
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
exports.default = config;
