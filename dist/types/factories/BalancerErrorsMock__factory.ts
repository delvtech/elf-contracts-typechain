/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  BalancerErrorsMock,
  BalancerErrorsMockInterface,
} from "../BalancerErrorsMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "code",
        type: "uint256",
      },
    ],
    name: "fail",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b506101088061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063132e4f3c14602d575b600080fd5b605660048036036020811015604157600080fd5b81019080803590602001909291905050506058565b005b605f816062565b50565b6030600a820601600a820491506030600a830601600a830492506030600a8406018060101b8260081b8401016642414c230000000160c81b7f08c379a000000000000000000000000000000000000000000000000000000000600052602060045260076024528060445260646000fdfea2646970667358221220fcc97b28de653a6bdd1f826ac04262e8c2faa279db51c0a6b9569d4b0c7daf5864736f6c63430007010033";

export class BalancerErrorsMock__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BalancerErrorsMock> {
    return super.deploy(overrides || {}) as Promise<BalancerErrorsMock>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BalancerErrorsMock {
    return super.attach(address) as BalancerErrorsMock;
  }
  connect(signer: Signer): BalancerErrorsMock__factory {
    return super.connect(signer) as BalancerErrorsMock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BalancerErrorsMockInterface {
    return new utils.Interface(_abi) as BalancerErrorsMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BalancerErrorsMock {
    return new Contract(address, _abi, signerOrProvider) as BalancerErrorsMock;
  }
}