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
import type { TestERC20, TestERC20Interface } from "../TestERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "decimals_",
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
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [
      {
        internalType: "address",
        name: "destination",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "setBalance",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [
      {
        internalType: "address",
        name: "destination",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "uncheckedTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620020173803806200201783398181016040528101906200003791906200037f565b828281600090805190602001906200005192919062000246565b5080600190805190602001906200006a92919062000246565b506012600260006101000a81548160ff021916908360ff1602179055507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600360008073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600360003073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506200015f6200022660201b60201c565b7f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6000604051620001919190620004c5565b60405180910390206040518060400160405280600181526020017f3100000000000000000000000000000000000000000000000000000000000000815250805190602001204630604051602001620001ee959493929190620004de565b6040516020818303038152906040528051906020012060068190555050506200021d816200022860201b60201c565b505050620006fb565b565b80600260006101000a81548160ff021916908360ff16021790555050565b82805462000254906200064d565b90600052602060002090601f016020900481019282620002785760008555620002c4565b82601f106200029357805160ff1916838001178555620002c4565b82800160010185558215620002c4579182015b82811115620002c3578251825591602001919060010190620002a6565b5b509050620002d39190620002d7565b5090565b5b80821115620002f2576000816000905550600101620002d8565b5090565b60006200030d62000307846200056f565b6200053b565b9050828152602081018484840111156200032657600080fd5b6200033384828562000617565b509392505050565b600082601f8301126200034d57600080fd5b81516200035f848260208601620002f6565b91505092915050565b6000815190506200037981620006e1565b92915050565b6000806000606084860312156200039557600080fd5b600084015167ffffffffffffffff811115620003b057600080fd5b620003be868287016200033b565b935050602084015167ffffffffffffffff811115620003dc57600080fd5b620003ea868287016200033b565b9250506040620003fd8682870162000368565b9150509250925092565b6200041281620005c2565b82525050565b6200042381620005d6565b82525050565b6000815462000438816200064d565b620004448186620005b7565b945060018216600081146200046257600181146200047457620004ab565b60ff19831686528186019350620004ab565b6200047f85620005a2565b60005b83811015620004a35781548189015260018201915060208101905062000482565b838801955050505b50505092915050565b620004bf8162000600565b82525050565b6000620004d3828462000429565b915081905092915050565b600060a082019050620004f5600083018862000418565b62000504602083018762000418565b62000513604083018662000418565b620005226060830185620004b4565b62000531608083018462000407565b9695505050505050565b6000604051905081810181811067ffffffffffffffff82111715620005655762000564620006b2565b5b8060405250919050565b600067ffffffffffffffff8211156200058d576200058c620006b2565b5b601f19601f8301169050602081019050919050565b60008190508160005260206000209050919050565b600081905092915050565b6000620005cf82620005e0565b9050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b83811015620006375780820151818401526020810190506200061a565b8381111562000647576000848401525b50505050565b600060028204905060018216806200066657607f821691505b602082108114156200067d576200067c62000683565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620006ec816200060a565b8114620006f857600080fd5b50565b61190c806200070b6000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806370a0823111610097578063d505accf11610066578063d505accf1461029c578063dd62ed3e146102b8578063e22f03c1146102e8578063e30443bc14610304576100f5565b806370a08231146101ee5780637ecebe001461021e57806395d89b411461024e578063a9059cbb1461026c576100f5565b806330adf81f116100d357806330adf81f14610178578063313ce567146101965780633644e515146101b457806340c10f19146101d2576100f5565b806306fdde03146100fa578063095ea7b31461011857806323b872dd14610148575b600080fd5b610102610320565b60405161010f919061152b565b60405180910390f35b610132600480360381019061012d919061115b565b6103ae565b60405161013f919061144f565b60405180910390f35b610162600480360381019061015d919061106e565b6104a0565b60405161016f919061144f565b60405180910390f35b610180610823565b60405161018d919061146a565b60405180910390f35b61019e61084a565b6040516101ab9190611628565b60405180910390f35b6101bc61085d565b6040516101c9919061146a565b60405180910390f35b6101ec60048036038101906101e7919061115b565b610863565b005b61020860048036038101906102039190611009565b610871565b604051610215919061160d565b60405180910390f35b61023860048036038101906102339190611009565b610889565b604051610245919061160d565b60405180910390f35b6102566108a1565b604051610263919061152b565b60405180910390f35b6102866004803603810190610281919061115b565b61092f565b604051610293919061144f565b60405180910390f35b6102b660048036038101906102b191906110bd565b610944565b005b6102d260048036038101906102cd9190611032565b610d2a565b6040516102df919061160d565b60405180910390f35b61030260048036038101906102fd919061115b565b610d4f565b005b61031e6004803603810190610319919061115b565b610e0f565b005b6000805461032d90611786565b80601f016020809104026020016040519081016040528092919081815260200182805461035990611786565b80156103a65780601f1061037b576101008083540402835291602001916103a6565b820191906000526020600020905b81548152906001019060200180831161038957829003601f168201915b505050505081565b600081600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161048e919061160d565b60405180910390a36001905092915050565b600080600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082811015610528576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161051f906115ed565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16146106d5576000600460008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146106d35783811015610646576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161063d9061154d565b60405180910390fd5b838161065291906116c0565b600460008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b505b82816106e191906116c0565b600360008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555082600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461076f919061166a565b600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8560405161080f919061160d565b60405180910390a360019150509392505050565b7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c960001b81565b600260009054906101000a900460ff1681565b60065481565b61086d8282610ebd565b5050565b60036020528060005260406000206000915090505481565b60056020528060005260406000206000915090505481565b600180546108ae90611786565b80601f01602080910402602001604051908101604052809291908181526020018280546108da90611786565b80156109275780601f106108fc57610100808354040283529160200191610927565b820191906000526020600020905b81548152906001019060200180831161090a57829003601f168201915b505050505081565b600061093c3384846104a0565b905092915050565b60006006547f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c960001b898989600560008e73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548a6040516020016109c696959493929190611485565b604051602081830303815290604052805190602001206040516020016109ed929190611418565b604051602081830303815290604052805190602001209050600073ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff161415610a75576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a6c9061158d565b60405180910390fd5b60018185858560405160008152602001604052604051610a9894939291906114e6565b6020604051602081039080840390855afa158015610aba573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff1614610b31576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b28906115ad565b60405180910390fd5b6000851480610b405750844211155b610b7f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b76906115cd565b60405180910390fd5b7f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08260001c1115610be5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bdc9061156d565b60405180910390fd5b600560008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815480929190610c35906117b8565b919050555085600460008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508673ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92588604051610d18919061160d565b60405180910390a35050505050505050565b6004602052816000526040600020602052806000526040600020600091509150505481565b80600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610d9e919061166a565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610e03919061160d565b60405180910390a35050565b80600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610eb1919061160d565b60405180910390a35050565b80600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610f08919061166a565b600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610fa9919061160d565b60405180910390a35050565b600081359050610fc48161187a565b92915050565b600081359050610fd981611891565b92915050565b600081359050610fee816118a8565b92915050565b600081359050611003816118bf565b92915050565b60006020828403121561101b57600080fd5b600061102984828501610fb5565b91505092915050565b6000806040838503121561104557600080fd5b600061105385828601610fb5565b925050602061106485828601610fb5565b9150509250929050565b60008060006060848603121561108357600080fd5b600061109186828701610fb5565b93505060206110a286828701610fb5565b92505060406110b386828701610fdf565b9150509250925092565b600080600080600080600060e0888a0312156110d857600080fd5b60006110e68a828b01610fb5565b97505060206110f78a828b01610fb5565b96505060406111088a828b01610fdf565b95505060606111198a828b01610fdf565b945050608061112a8a828b01610ff4565b93505060a061113b8a828b01610fca565b92505060c061114c8a828b01610fca565b91505092959891949750929550565b6000806040838503121561116e57600080fd5b600061117c85828601610fb5565b925050602061118d85828601610fdf565b9150509250929050565b6111a0816116f4565b82525050565b6111af81611706565b82525050565b6111be81611712565b82525050565b6111d56111d082611712565b611801565b82525050565b60006111e682611643565b6111f0818561164e565b9350611200818560208601611753565b61120981611869565b840191505092915050565b6000611221601d8361164e565b91507f45524332303a20696e73756666696369656e742d616c6c6f77616e63650000006000830152602082019050919050565b600061126160028361165f565b91507f19010000000000000000000000000000000000000000000000000000000000006000830152600282019050919050565b60006112a160228361164e565b91507f45524332303a20696e76616c6964207369676e6174757265202773272076616c60008301527f75650000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b600061130760188361164e565b91507f45524332303a20696e76616c69642d616464726573732d3000000000000000006000830152602082019050919050565b600061134760158361164e565b91507f45524332303a20696e76616c69642d7065726d697400000000000000000000006000830152602082019050919050565b600061138760158361164e565b91507f45524332303a207065726d69742d6578706972656400000000000000000000006000830152602082019050919050565b60006113c7601b8361164e565b91507f45524332303a20696e73756666696369656e742d62616c616e636500000000006000830152602082019050919050565b6114038161173c565b82525050565b61141281611746565b82525050565b600061142382611254565b915061142f82856111c4565b60208201915061143f82846111c4565b6020820191508190509392505050565b600060208201905061146460008301846111a6565b92915050565b600060208201905061147f60008301846111b5565b92915050565b600060c08201905061149a60008301896111b5565b6114a76020830188611197565b6114b46040830187611197565b6114c160608301866113fa565b6114ce60808301856113fa565b6114db60a08301846113fa565b979650505050505050565b60006080820190506114fb60008301876111b5565b6115086020830186611409565b61151560408301856111b5565b61152260608301846111b5565b95945050505050565b6000602082019050818103600083015261154581846111db565b905092915050565b6000602082019050818103600083015261156681611214565b9050919050565b6000602082019050818103600083015261158681611294565b9050919050565b600060208201905081810360008301526115a6816112fa565b9050919050565b600060208201905081810360008301526115c68161133a565b9050919050565b600060208201905081810360008301526115e68161137a565b9050919050565b60006020820190508181036000830152611606816113ba565b9050919050565b600060208201905061162260008301846113fa565b92915050565b600060208201905061163d6000830184611409565b92915050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b60006116758261173c565b91506116808361173c565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156116b5576116b461180b565b5b828201905092915050565b60006116cb8261173c565b91506116d68361173c565b9250828210156116e9576116e861180b565b5b828203905092915050565b60006116ff8261171c565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b83811015611771578082015181840152602081019050611756565b83811115611780576000848401525b50505050565b6000600282049050600182168061179e57607f821691505b602082108114156117b2576117b161183a565b5b50919050565b60006117c38261173c565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156117f6576117f561180b565b5b600182019050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b611883816116f4565b811461188e57600080fd5b50565b61189a81611712565b81146118a557600080fd5b50565b6118b18161173c565b81146118bc57600080fd5b50565b6118c881611746565b81146118d357600080fd5b5056fea2646970667358221220062587595c8456670c829f61585f4a390b0b16cc5b66f6525881b42ee934d48d64736f6c63430008000033";

export class TestERC20__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    name_: string,
    symbol_: string,
    decimals_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestERC20> {
    return super.deploy(
      name_,
      symbol_,
      decimals_,
      overrides || {}
    ) as Promise<TestERC20>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    decimals_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name_,
      symbol_,
      decimals_,
      overrides || {}
    );
  }
  attach(address: string): TestERC20 {
    return super.attach(address) as TestERC20;
  }
  connect(signer: Signer): TestERC20__factory {
    return super.connect(signer) as TestERC20__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestERC20Interface {
    return new utils.Interface(_abi) as TestERC20Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestERC20 {
    return new Contract(address, _abi, signerOrProvider) as TestERC20;
  }
}
