/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IPriceOracle, IPriceOracleInterface } from "../IPriceOracle";

const _abi = [
  {
    inputs: [],
    name: "getLargestSafeQueryWindow",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum IPriceOracle.Variable",
        name: "variable",
        type: "uint8",
      },
    ],
    name: "getLatest",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "enum IPriceOracle.Variable",
            name: "variable",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "ago",
            type: "uint256",
          },
        ],
        internalType: "struct IPriceOracle.OracleAccumulatorQuery[]",
        name: "queries",
        type: "tuple[]",
      },
    ],
    name: "getPastAccumulators",
    outputs: [
      {
        internalType: "int256[]",
        name: "results",
        type: "int256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "enum IPriceOracle.Variable",
            name: "variable",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "secs",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "ago",
            type: "uint256",
          },
        ],
        internalType: "struct IPriceOracle.OracleAverageQuery[]",
        name: "queries",
        type: "tuple[]",
      },
    ],
    name: "getTimeWeightedAverage",
    outputs: [
      {
        internalType: "uint256[]",
        name: "results",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IPriceOracle__factory {
  static readonly abi = _abi;
  static createInterface(): IPriceOracleInterface {
    return new utils.Interface(_abi) as IPriceOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IPriceOracle {
    return new Contract(address, _abi, signerOrProvider) as IPriceOracle;
  }
}
