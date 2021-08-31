/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestYVault, TestYVaultInterface } from "../TestYVault";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "_decimals",
        type: "uint8",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PERMIT_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "destination",
        type: "address",
      },
    ],
    name: "deposit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "governance",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "pricePerShare",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "setDepositLimit",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalAssets",
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
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "updateShares",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_shares",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "destination",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002a4138038062002a418339818101604052810190620000379190620003ce565b6040518060400160405280600b81526020017f746573742079746f6b656e0000000000000000000000000000000000000000008152506040518060400160405280600681526020017f79546f6b656e00000000000000000000000000000000000000000000000000008152508160009080519060200190620000bb929190620002f0565b508060019080519060200190620000d4929190620002f0565b506012600260006101000a81548160ff021916908360ff1602179055507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600360008073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600360003073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550620001c9620002d060201b60201c565b7f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6000604051620001fb9190620004cd565b60405180910390206040518060400160405280600181526020017f310000000000000000000000000000000000000000000000000000000000000081525080519060200120463060405160200162000258959493929190620004e6565b60405160208183030381529060405280519060200120600681905550505081600860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550620002c881620002d260201b60201c565b505062000651565b565b80600260006101000a81548160ff021916908360ff16021790555050565b828054620002fe90620005b8565b90600052602060002090601f0160209004810192826200032257600085556200036e565b82601f106200033d57805160ff19168380011785556200036e565b828001600101855582156200036e579182015b828111156200036d57825182559160200191906001019062000350565b5b5090506200037d919062000381565b5090565b5b808211156200039c57600081600090555060010162000382565b5090565b600081519050620003b1816200061d565b92915050565b600081519050620003c88162000637565b92915050565b60008060408385031215620003e257600080fd5b6000620003f285828601620003a0565b92505060206200040585828601620003b7565b9150509250929050565b6200041a8162000563565b82525050565b6200042b8162000577565b82525050565b600081546200044081620005b8565b6200044c818662000558565b945060018216600081146200046a57600181146200047c57620004b3565b60ff19831686528186019350620004b3565b620004878562000543565b60005b83811015620004ab578154818901526001820191506020810190506200048a565b838801955050505b50505092915050565b620004c781620005a1565b82525050565b6000620004db828462000431565b915081905092915050565b600060a082019050620004fd600083018862000420565b6200050c602083018762000420565b6200051b604083018662000420565b6200052a6060830185620004bc565b6200053960808301846200040f565b9695505050505050565b60008190508160005260206000209050919050565b600081905092915050565b6000620005708262000581565b9050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60006002820490506001821680620005d157607f821691505b60208210811415620005e857620005e7620005ee565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b620006288162000563565b81146200063457600080fd5b50565b6200064281620005ab565b81146200064e57600080fd5b50565b6123e080620006616000396000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c80636e553f65116100b8578063a9059cbb1161007c578063a9059cbb14610344578063bdc8144b14610374578063d505accf14610390578063dd62ed3e146103ac578063e63697c8146103dc578063fc0c546a1461040c57610137565b80636e553f651461027857806370a08231146102a85780637ecebe00146102d857806395d89b411461030857806399530b061461032657610137565b80632a410068116100ff5780632a410068146101f657806330adf81f14610200578063313ce5671461021e5780633644e5151461023c5780635aa6e6751461025a57610137565b806301e1d1141461013c57806306fdde031461015a578063095ea7b31461017857806318160ddd146101a857806323b872dd146101c6575b600080fd5b61014461042a565b6040516101519190611e92565b60405180910390f35b6101626104dc565b60405161016f9190611d90565b60405180910390f35b610192600480360381019061018d91906117ff565b61056a565b60405161019f9190611cb4565b60405180910390f35b6101b061065c565b6040516101bd9190611e92565b60405180910390f35b6101e060048036038101906101db9190611712565b610662565b6040516101ed9190611cb4565b60405180910390f35b6101fe6109e5565b005b610208610b32565b6040516102159190611ccf565b60405180910390f35b610226610b59565b6040516102339190611ead565b60405180910390f35b610244610b6c565b6040516102519190611ccf565b60405180910390f35b610262610b72565b60405161026f9190611c39565b60405180910390f35b610292600480360381019061028d91906118b6565b610baf565b60405161029f9190611e92565b60405180910390f35b6102c260048036038101906102bd91906116ad565b610cb3565b6040516102cf9190611e92565b60405180910390f35b6102f260048036038101906102ed91906116ad565b610ccb565b6040516102ff9190611e92565b60405180910390f35b610310610ce3565b60405161031d9190611d90565b60405180910390f35b61032e610d71565b60405161033b9190611e92565b60405180910390f35b61035e600480360381019061035991906117ff565b610e89565b60405161036b9190611cb4565b60405180910390f35b61038e60048036038101906103899190611864565b610e9e565b005b6103aa60048036038101906103a59190611761565b610ed9565b005b6103c660048036038101906103c191906116d6565b6112bf565b6040516103d39190611e92565b60405180910390f35b6103f660048036038101906103f191906118f2565b6112e4565b6040516104039190611e92565b60405180910390f35b6104146113e7565b6040516104219190611c39565b60405180910390f35b6000600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016104879190611c39565b60206040518083038186803b15801561049f57600080fd5b505afa1580156104b3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104d7919061188d565b905090565b600080546104e990612207565b80601f016020809104026020016040519081016040528092919081815260200182805461051590612207565b80156105625780601f1061053757610100808354040283529160200191610562565b820191906000526020600020905b81548152906001019060200180831161054557829003601f168201915b505050505081565b600081600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161064a9190611e92565b60405180910390a36001905092915050565b60075481565b600080600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050828110156106ea576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106e190611e52565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614610897576000600460008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146108955783811015610808576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107ff90611db2565b60405180910390fd5b83816108149190612141565b600460008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b505b82816108a39190612141565b600360008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555082600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546109319190611eef565b600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef856040516109d19190611e92565b60405180910390a360019150509392505050565b6000600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401610a429190611c39565b60206040518083038186803b158015610a5a57600080fd5b505afa158015610a6e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a92919061188d565b9050600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f1930600a84610ae09190611f45565b6040518363ffffffff1660e01b8152600401610afd929190611c8b565b600060405180830381600087803b158015610b1757600080fd5b505af1158015610b2b573d6000803e3d6000fd5b5050505050565b7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c960001b81565b600260009054906101000a900460ff1681565b60065481565b60006040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ba690611e72565b60405180910390fd5b600080610bba610d71565b600260009054906101000a900460ff16600a610bd69190611fc9565b85610be191906120e7565b610beb9190611f45565b9050600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330876040518463ffffffff1660e01b8152600401610c4c93929190611c54565b602060405180830381600087803b158015610c6657600080fd5b505af1158015610c7a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c9e919061183b565b50610ca9838261140d565b8091505092915050565b60036020528060005260406000206000915090505481565b60056020528060005260406000206000915090505481565b60018054610cf090612207565b80601f0160208091040260200160405190810160405280929190818152602001828054610d1c90612207565b8015610d695780601f10610d3e57610100808354040283529160200191610d69565b820191906000526020600020905b815481529060010190602001808311610d4c57829003601f168201915b505050505081565b600080600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401610dcf9190611c39565b60206040518083038186803b158015610de757600080fd5b505afa158015610dfb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e1f919061188d565b90506000811415610e4e57600260009054906101000a900460ff16600a610e469190611fc9565b915050610e86565b600754600260009054906101000a900460ff16600a610e6d9190611fc9565b82610e7891906120e7565b610e829190611f45565b9150505b90565b6000610e96338484610662565b905092915050565b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ed090611e72565b60405180910390fd5b60006006547f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c960001b898989600560008e73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548a604051602001610f5b96959493929190611cea565b60405160208183030381529060405280519060200120604051602001610f82929190611c02565b604051602081830303815290604052805190602001209050600073ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff16141561100a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161100190611df2565b60405180910390fd5b6001818585856040516000815260200160405260405161102d9493929190611d4b565b6020604051602081039080840390855afa15801561104f573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff16146110c6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110bd90611e12565b60405180910390fd5b60008514806110d55750844211155b611114576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161110b90611e32565b60405180910390fd5b7f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08260001c111561117a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161117190611dd2565b60405180910390fd5b600560008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008154809291906111ca90612239565b919050555085600460008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508673ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925886040516112ad9190611e92565b60405180910390a35050505050505050565b6004602052816000526040600020602052806000526040600020600091509150505481565b600080600260009054906101000a900460ff16600a6113039190611fc9565b61130b610d71565b8661131691906120e7565b6113209190611f45565b905061132c338661151e565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb85836040518363ffffffff1660e01b8152600401611389929190611c8b565b602060405180830381600087803b1580156113a357600080fd5b505af11580156113b7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113db919061183b565b50809150509392505050565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b80600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546114589190611eef565b600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555080600760008282546114ad9190611eef565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516115129190611e92565b60405180910390a35050565b80600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546115699190612141565b600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555080600760008282546115be9190612141565b92505081905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516116239190611e92565b60405180910390a35050565b60008135905061163e81612337565b92915050565b6000815190506116538161234e565b92915050565b60008135905061166881612365565b92915050565b60008135905061167d8161237c565b92915050565b6000815190506116928161237c565b92915050565b6000813590506116a781612393565b92915050565b6000602082840312156116bf57600080fd5b60006116cd8482850161162f565b91505092915050565b600080604083850312156116e957600080fd5b60006116f78582860161162f565b92505060206117088582860161162f565b9150509250929050565b60008060006060848603121561172757600080fd5b60006117358682870161162f565b93505060206117468682870161162f565b92505060406117578682870161166e565b9150509250925092565b600080600080600080600060e0888a03121561177c57600080fd5b600061178a8a828b0161162f565b975050602061179b8a828b0161162f565b96505060406117ac8a828b0161166e565b95505060606117bd8a828b0161166e565b94505060806117ce8a828b01611698565b93505060a06117df8a828b01611659565b92505060c06117f08a828b01611659565b91505092959891949750929550565b6000806040838503121561181257600080fd5b60006118208582860161162f565b92505060206118318582860161166e565b9150509250929050565b60006020828403121561184d57600080fd5b600061185b84828501611644565b91505092915050565b60006020828403121561187657600080fd5b60006118848482850161166e565b91505092915050565b60006020828403121561189f57600080fd5b60006118ad84828501611683565b91505092915050565b600080604083850312156118c957600080fd5b60006118d78582860161166e565b92505060206118e88582860161162f565b9150509250929050565b60008060006060848603121561190757600080fd5b60006119158682870161166e565b93505060206119268682870161162f565b92505060406119378682870161166e565b9150509250925092565b61194a81612175565b82525050565b61195981612187565b82525050565b61196881612193565b82525050565b61197f61197a82612193565b612282565b82525050565b600061199082611ec8565b61199a8185611ed3565b93506119aa8185602086016121d4565b6119b381612319565b840191505092915050565b60006119cb601d83611ed3565b91507f45524332303a20696e73756666696369656e742d616c6c6f77616e63650000006000830152602082019050919050565b6000611a0b600283611ee4565b91507f19010000000000000000000000000000000000000000000000000000000000006000830152600282019050919050565b6000611a4b602283611ed3565b91507f45524332303a20696e76616c6964207369676e6174757265202773272076616c60008301527f75650000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611ab1601883611ed3565b91507f45524332303a20696e76616c69642d616464726573732d3000000000000000006000830152602082019050919050565b6000611af1601583611ed3565b91507f45524332303a20696e76616c69642d7065726d697400000000000000000000006000830152602082019050919050565b6000611b31601583611ed3565b91507f45524332303a207065726d69742d6578706972656400000000000000000000006000830152602082019050919050565b6000611b71601b83611ed3565b91507f45524332303a20696e73756666696369656e742d62616c616e636500000000006000830152602082019050919050565b6000611bb1600d83611ed3565b91507f556e696d706c656d656e746564000000000000000000000000000000000000006000830152602082019050919050565b611bed816121bd565b82525050565b611bfc816121c7565b82525050565b6000611c0d826119fe565b9150611c19828561196e565b602082019150611c29828461196e565b6020820191508190509392505050565b6000602082019050611c4e6000830184611941565b92915050565b6000606082019050611c696000830186611941565b611c766020830185611941565b611c836040830184611be4565b949350505050565b6000604082019050611ca06000830185611941565b611cad6020830184611be4565b9392505050565b6000602082019050611cc96000830184611950565b92915050565b6000602082019050611ce4600083018461195f565b92915050565b600060c082019050611cff600083018961195f565b611d0c6020830188611941565b611d196040830187611941565b611d266060830186611be4565b611d336080830185611be4565b611d4060a0830184611be4565b979650505050505050565b6000608082019050611d60600083018761195f565b611d6d6020830186611bf3565b611d7a604083018561195f565b611d87606083018461195f565b95945050505050565b60006020820190508181036000830152611daa8184611985565b905092915050565b60006020820190508181036000830152611dcb816119be565b9050919050565b60006020820190508181036000830152611deb81611a3e565b9050919050565b60006020820190508181036000830152611e0b81611aa4565b9050919050565b60006020820190508181036000830152611e2b81611ae4565b9050919050565b60006020820190508181036000830152611e4b81611b24565b9050919050565b60006020820190508181036000830152611e6b81611b64565b9050919050565b60006020820190508181036000830152611e8b81611ba4565b9050919050565b6000602082019050611ea76000830184611be4565b92915050565b6000602082019050611ec26000830184611bf3565b92915050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b6000611efa826121bd565b9150611f05836121bd565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611f3a57611f3961228c565b5b828201905092915050565b6000611f50826121bd565b9150611f5b836121bd565b925082611f6b57611f6a6122bb565b5b828204905092915050565b6000808291508390505b6001851115611fc057808604811115611f9c57611f9b61228c565b5b6001851615611fab5780820291505b8081029050611fb98561232a565b9450611f80565b94509492505050565b6000611fd4826121bd565b9150611fdf836121c7565b925061200c7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484612014565b905092915050565b60008261202457600190506120e0565b8161203257600090506120e0565b8160018114612048576002811461205257612081565b60019150506120e0565b60ff8411156120645761206361228c565b5b8360020a91508482111561207b5761207a61228c565b5b506120e0565b5060208310610133831016604e8410600b84101617156120b65782820a9050838111156120b1576120b061228c565b5b6120e0565b6120c38484846001611f76565b925090508184048111156120da576120d961228c565b5b81810290505b9392505050565b60006120f2826121bd565b91506120fd836121bd565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156121365761213561228c565b5b828202905092915050565b600061214c826121bd565b9150612157836121bd565b92508282101561216a5761216961228c565b5b828203905092915050565b60006121808261219d565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b838110156121f25780820151818401526020810190506121d7565b83811115612201576000848401525b50505050565b6000600282049050600182168061221f57607f821691505b60208210811415612233576122326122ea565b5b50919050565b6000612244826121bd565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156122775761227661228c565b5b600182019050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b60008160011c9050919050565b61234081612175565b811461234b57600080fd5b50565b61235781612187565b811461236257600080fd5b50565b61236e81612193565b811461237957600080fd5b50565b612385816121bd565b811461239057600080fd5b50565b61239c816121c7565b81146123a757600080fd5b5056fea26469706673582212205e61a92f56c5cdd26ea4ef7b3f15e7c71349b19034e2c03d3ff7a4ea17bbeff064736f6c63430008000033";

export class TestYVault__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _token: string,
    _decimals: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestYVault> {
    return super.deploy(
      _token,
      _decimals,
      overrides || {}
    ) as Promise<TestYVault>;
  }
  getDeployTransaction(
    _token: string,
    _decimals: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_token, _decimals, overrides || {});
  }
  attach(address: string): TestYVault {
    return super.attach(address) as TestYVault;
  }
  connect(signer: Signer): TestYVault__factory {
    return super.connect(signer) as TestYVault__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestYVaultInterface {
    return new utils.Interface(_abi) as TestYVaultInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestYVault {
    return new Contract(address, _abi, signerOrProvider) as TestYVault;
  }
}
