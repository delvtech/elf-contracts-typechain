/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BytesLike,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestUserProxy, TestUserProxyInterface } from "../TestUserProxy";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_weth",
        type: "address",
      },
      {
        internalType: "address",
        name: "_trancheFactory",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_trancheBytecodeHash",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "who",
        type: "address",
      },
    ],
    name: "authorize",
    outputs: [],
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
    name: "authorized",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "who",
        type: "address",
      },
    ],
    name: "deauthorize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "deprecate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "position",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "expiration",
        type: "uint256",
      },
    ],
    name: "deriveTranche",
    outputs: [
      {
        internalType: "contract ITranche",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "who",
        type: "address",
      },
    ],
    name: "isAuthorized",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isFrozen",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
        internalType: "contract IERC20",
        name: "_underlying",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_expiration",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_position",
        type: "address",
      },
      {
        components: [
          {
            internalType: "contract IERC20Permit",
            name: "tokenContract",
            type: "address",
          },
          {
            internalType: "address",
            name: "who",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "expiration",
            type: "uint256",
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
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
        ],
        internalType: "struct UserProxy.PermitData[]",
        name: "_permitCallData",
        type: "tuple[]",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
    inputs: [
      {
        internalType: "bool",
        name: "_newState",
        type: "bool",
      },
    ],
    name: "setIsFrozen",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "who",
        type: "address",
      },
    ],
    name: "setOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "weth",
    outputs: [
      {
        internalType: "contract IWETH",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_expiration",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_position",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amountPT",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amountYT",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "contract IERC20Permit",
            name: "tokenContract",
            type: "address",
          },
          {
            internalType: "address",
            name: "who",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "expiration",
            type: "uint256",
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
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
        ],
        internalType: "struct UserProxy.PermitData[]",
        name: "_permitCallData",
        type: "tuple[]",
      },
    ],
    name: "withdrawWeth",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60e06040526000600260006101000a81548160ff0219169083151502179055503480156200002c57600080fd5b506040516200269a3803806200269a8339818101604052810190620000529190620001b0565b828282336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550620000a6336200012860201b60201c565b8273ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815250508173ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1660601b815250508060c0818152505050505050505062000278565b60018060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b600081519050620001938162000244565b92915050565b600081519050620001aa816200025e565b92915050565b600080600060608486031215620001c657600080fd5b6000620001d68682870162000182565b9350506020620001e98682870162000182565b9250506040620001fc8682870162000199565b9150509250925092565b6000620002138262000224565b9050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6200024f8162000206565b81146200025b57600080fd5b50565b62000269816200021a565b81146200027557600080fd5b50565b60805160601c60a05160601c60c0516123ca620002d06000396000611313015260006112f101526000818160cd01528181610601015281816107a401528181610c7d01528181610fd6015261105701526123ca6000f3fe6080604052600436106100c65760003560e01c806364eda74b1161007f578063b6a5d7de11610059578063b6a5d7de146102a3578063b841d2d2146102cc578063b9181611146102fd578063fe9fbb801461033a57610125565b806364eda74b146102265780636f1ea24c1461024f5780638da5cb5b1461027857610125565b80630a08ca671461012a5780630fcc0c281461016757806313af40351461017e57806327c97fa5146101a757806333eeb147146101d05780633fc8cef3146101fb57610125565b36610125577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461012357600080fd5b005b600080fd5b34801561013657600080fd5b50610151600480360381019061014c919061170c565b610377565b60405161015e9190611e62565b60405180910390f35b34801561017357600080fd5b5061017c61038b565b005b34801561018a57600080fd5b506101a560048036038101906101a091906116e3565b610432565b005b3480156101b357600080fd5b506101ce60048036038101906101c991906116e3565b610503565b005b3480156101dc57600080fd5b506101e56105ec565b6040516101f29190611e47565b60405180910390f35b34801561020757600080fd5b506102106105ff565b60405161021d9190611e7d565b60405180910390f35b34801561023257600080fd5b5061024d60048036038101906102489190611748565b610623565b005b34801561025b57600080fd5b506102766004803603810190610271919061183e565b610688565b005b34801561028457600080fd5b5061028d610d6f565b60405161029a9190611d5d565b60405180910390f35b3480156102af57600080fd5b506102ca60048036038101906102c591906116e3565b610d93565b005b6102e660048036038101906102e191906118d0565b610e2d565b6040516102f492919061201c565b60405180910390f35b34801561030957600080fd5b50610324600480360381019061031f91906116e3565b611244565b6040516103319190611e47565b60405180910390f35b34801561034657600080fd5b50610361600480360381019061035c91906116e3565b611264565b60405161036e9190611e47565b60405180910390f35b600061038383836112ba565b905092915050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610419576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161041090611eb8565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff16ff5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146104c0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104b790611eb8565b60405180910390fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610591576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161058890611eb8565b60405180910390fd5b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b600260009054906101000a900460ff1681565b7f000000000000000000000000000000000000000000000000000000000000000081565b61062c33611264565b61066b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161066290611ed8565b60405180910390fd5b80600260006101000a81548160ff02191690831515021790555050565b600260009054906101000a900460ff16156106d8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106cf90611fb8565b60405180910390fd5b8181808060200260200160405190810160405280939291908181526020016000905b8282101561072a57848483905060e0020180360381019061071b91906117ec565b815260200190600101906106fa565b505050505060008151146107a25760005b81518110156107a05761078d828281518110610780577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015161136b565b8080610798906121e6565b91505061073b565b505b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1663fc0c546a6040518163ffffffff1660e01b815260040160206040518083038186803b15801561081f57600080fd5b505afa158015610833573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610857919061179a565b73ffffffffffffffffffffffffffffffffffffffff16146108ad576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108a490611f18565b60405180910390fd5b6000851415806108be575060008414155b6108fd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108f490611ef8565b60405180910390fd5b600061090987896112ba565b905060008060008814610a36578273ffffffffffffffffffffffffffffffffffffffff166323b872dd33308b6040518463ffffffff1660e01b815260040161095393929190611d78565b602060405180830381600087803b15801561096d57600080fd5b505af1158015610981573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109a59190611771565b508273ffffffffffffffffffffffffffffffffffffffff1663884e17f389306040518363ffffffff1660e01b81526004016109e1929190611ff3565b602060405180830381600087803b1580156109fb57600080fd5b505af1158015610a0f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a339190611815565b91505b60008714610be15760008373ffffffffffffffffffffffffffffffffffffffff1663764b666c6040518163ffffffff1660e01b815260040160206040518083038186803b158015610a8657600080fd5b505afa158015610a9a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610abe91906117c3565b90508073ffffffffffffffffffffffffffffffffffffffff166323b872dd33308b6040518463ffffffff1660e01b8152600401610afd93929190611d78565b602060405180830381600087803b158015610b1757600080fd5b505af1158015610b2b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b4f9190611771565b508373ffffffffffffffffffffffffffffffffffffffff16631210aac289306040518363ffffffff1660e01b8152600401610b8b929190611ff3565b602060405180830381600087803b158015610ba557600080fd5b505af1158015610bb9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bdd9190611815565b9150505b60008814610c2e576000821415610c2d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c2490611f38565b60405180910390fd5b5b60008714610c7b576000811415610c7a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c7190611f58565b60405180910390fd5b5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16632e1a7d4d8284610cc39190612087565b6040518263ffffffff1660e01b8152600401610cdf9190611fd8565b600060405180830381600087803b158015610cf957600080fd5b505af1158015610d0d573d6000803e3d6000fd5b505050503373ffffffffffffffffffffffffffffffffffffffff166108fc8284610d379190612087565b9081150290604051600060405180830381858888f19350505050158015610d62573d6000803e3d6000fd5b5050505050505050505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610e21576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e1890611eb8565b60405180910390fd5b610e2a81611401565b50565b600080600260009054906101000a900460ff1615610e80576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e7790611fb8565b60405180910390fd5b8383808060200260200160405190810160405280939291908181526020016000905b82821015610ed257848483905060e00201803603810190610ec391906117ec565b81526020019060010190610ea2565b50505050506000815114610f4a5760005b8151811015610f4857610f35828281518110610f28577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015161136b565b8080610f40906121e6565b915050610ee3565b505b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee73ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff16141561110857883414610fd4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fcb90611f98565b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d0e30db0346040518263ffffffff1660e01b81526004016000604051808303818588803b15801561103c57600080fd5b505af1158015611050573d6000803e3d6000fd5b50505050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb878b6040518363ffffffff1660e01b81526004016110b0929190611e1e565b602060405180830381600087803b1580156110ca57600080fd5b505af11580156110de573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111029190611771565b506111dc565b6000341461114b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161114290611e98565b60405180910390fd5b8773ffffffffffffffffffffffffffffffffffffffff166323b872dd33888c6040518463ffffffff1660e01b815260040161118893929190611d78565b602060405180830381600087803b1580156111a257600080fd5b505af11580156111b6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111da9190611771565b505b6000806111e9898961145b565b915091508a811015611230576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161122790611f78565b60405180910390fd5b818194509450505050965096945050505050565b60016020528060005260406000206000915054906101000a900460ff1681565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b60008083836040516020016112d0929190611ce3565b604051602081830303815290604052805190602001209050600060ff60f81b7f0000000000000000000000000000000000000000000000000000000000000000837f00000000000000000000000000000000000000000000000000000000000000006040516020016113459493929190611d0f565b6040516020818303038152906040528051906020012090508060001c9250505092915050565b806000015173ffffffffffffffffffffffffffffffffffffffff1663d505accf338360200151846040015185606001518660c0015187608001518860a001516040518863ffffffff1660e01b81526004016113cc9796959493929190611daf565b600060405180830381600087803b1580156113e657600080fd5b505af11580156113fa573d6000803e3d6000fd5b5050505050565b60018060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b600080600061146a84866112ba565b90508073ffffffffffffffffffffffffffffffffffffffff166385f45c88336040518263ffffffff1660e01b81526004016114a59190611d5d565b6040805180830381600087803b1580156114be57600080fd5b505af11580156114d2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114f69190611962565b92509250509250929050565b600081359050611511816122dc565b92915050565b60008083601f84011261152957600080fd5b8235905067ffffffffffffffff81111561154257600080fd5b6020830191508360e082028301111561155a57600080fd5b9250929050565b600081359050611570816122f3565b92915050565b600081519050611585816122f3565b92915050565b60008135905061159a8161230a565b92915050565b6000813590506115af81612321565b92915050565b6000813590506115c481612338565b92915050565b6000815190506115d981612338565b92915050565b6000815190506115ee8161234f565b92915050565b600060e0828403121561160657600080fd5b61161060e0612045565b90506000611620848285016115a0565b600083015250602061163484828501611502565b6020830152506040611648848285016116a4565b604083015250606061165c848285016116a4565b60608301525060806116708482850161158b565b60808301525060a06116848482850161158b565b60a08301525060c0611698848285016116ce565b60c08301525092915050565b6000813590506116b381612366565b92915050565b6000815190506116c881612366565b92915050565b6000813590506116dd8161237d565b92915050565b6000602082840312156116f557600080fd5b600061170384828501611502565b91505092915050565b6000806040838503121561171f57600080fd5b600061172d85828601611502565b925050602061173e858286016116a4565b9150509250929050565b60006020828403121561175a57600080fd5b600061176884828501611561565b91505092915050565b60006020828403121561178357600080fd5b600061179184828501611576565b91505092915050565b6000602082840312156117ac57600080fd5b60006117ba848285016115ca565b91505092915050565b6000602082840312156117d557600080fd5b60006117e3848285016115df565b91505092915050565b600060e082840312156117fe57600080fd5b600061180c848285016115f4565b91505092915050565b60006020828403121561182757600080fd5b6000611835848285016116b9565b91505092915050565b60008060008060008060a0878903121561185757600080fd5b600061186589828a016116a4565b965050602061187689828a01611502565b955050604061188789828a016116a4565b945050606061189889828a016116a4565b935050608087013567ffffffffffffffff8111156118b557600080fd5b6118c189828a01611517565b92509250509295509295509295565b60008060008060008060a087890312156118e957600080fd5b60006118f789828a016116a4565b965050602061190889828a016115b5565b955050604061191989828a016116a4565b945050606061192a89828a01611502565b935050608087013567ffffffffffffffff81111561194757600080fd5b61195389828a01611517565b92509250509295509295509295565b6000806040838503121561197557600080fd5b6000611983858286016116b9565b9250506020611994858286016116b9565b9150509250929050565b6119a7816120dd565b82525050565b6119be6119b9826120dd565b61222f565b82525050565b6119cd816120ef565b82525050565b6119e46119df826120fb565b612241565b82525050565b6119f381612127565b82525050565b611a0a611a0582612127565b61224b565b82525050565b611a198161219e565b82525050565b611a28816121c2565b82525050565b6000611a3b600b83612076565b91507f4e6f6e2070617961626c650000000000000000000000000000000000000000006000830152602082019050919050565b6000611a7b601083612076565b91507f53656e646572206e6f74206f776e6572000000000000000000000000000000006000830152602082019050919050565b6000611abb601583612076565b91507f53656e646572206e6f7420417574686f72697a656400000000000000000000006000830152602082019050919050565b6000611afb601083612076565b91507f496e76616c6964207769746864726177000000000000000000000000000000006000830152602082019050919050565b6000611b3b600e83612076565b91507f4e6f6e207765746820746f6b656e0000000000000000000000000000000000006000830152602082019050919050565b6000611b7b600683612076565b91507f52756767656400000000000000000000000000000000000000000000000000006000830152602082019050919050565b6000611bbb601083612076565b91507f4e6f207969656c642061636372756564000000000000000000000000000000006000830152602082019050919050565b6000611bfb601183612076565b91507f4e6f7420656e6f756768206d696e7465640000000000000000000000000000006000830152602082019050919050565b6000611c3b601983612076565b91507f496e636f727265637420616d6f756e742070726f7669646564000000000000006000830152602082019050919050565b6000611c7b600f83612076565b91507f436f6e74726163742066726f7a656e00000000000000000000000000000000006000830152602082019050919050565b611cb781612187565b82525050565b611cce611cc982612187565b612267565b82525050565b611cdd81612191565b82525050565b6000611cef82856119ad565b601482019150611cff8284611cbd565b6020820191508190509392505050565b6000611d1b82876119d3565b600182019150611d2b82866119ad565b601482019150611d3b82856119f9565b602082019150611d4b82846119f9565b60208201915081905095945050505050565b6000602082019050611d72600083018461199e565b92915050565b6000606082019050611d8d600083018661199e565b611d9a602083018561199e565b611da76040830184611cae565b949350505050565b600060e082019050611dc4600083018a61199e565b611dd1602083018961199e565b611dde6040830188611cae565b611deb6060830187611cae565b611df86080830186611cd4565b611e0560a08301856119ea565b611e1260c08301846119ea565b98975050505050505050565b6000604082019050611e33600083018561199e565b611e406020830184611cae565b9392505050565b6000602082019050611e5c60008301846119c4565b92915050565b6000602082019050611e776000830184611a10565b92915050565b6000602082019050611e926000830184611a1f565b92915050565b60006020820190508181036000830152611eb181611a2e565b9050919050565b60006020820190508181036000830152611ed181611a6e565b9050919050565b60006020820190508181036000830152611ef181611aae565b9050919050565b60006020820190508181036000830152611f1181611aee565b9050919050565b60006020820190508181036000830152611f3181611b2e565b9050919050565b60006020820190508181036000830152611f5181611b6e565b9050919050565b60006020820190508181036000830152611f7181611bae565b9050919050565b60006020820190508181036000830152611f9181611bee565b9050919050565b60006020820190508181036000830152611fb181611c2e565b9050919050565b60006020820190508181036000830152611fd181611c6e565b9050919050565b6000602082019050611fed6000830184611cae565b92915050565b60006040820190506120086000830185611cae565b612015602083018461199e565b9392505050565b60006040820190506120316000830185611cae565b61203e6020830184611cae565b9392505050565b6000604051905081810181811067ffffffffffffffff8211171561206c5761206b6122a0565b5b8060405250919050565b600082825260208201905092915050565b600061209282612187565b915061209d83612187565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156120d2576120d1612271565b5b828201905092915050565b60006120e882612167565b9050919050565b60008115159050919050565b60007fff0000000000000000000000000000000000000000000000000000000000000082169050919050565b6000819050919050565b600061213c826120dd565b9050919050565b600061214e826120dd565b9050919050565b6000612160826120dd565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60006121a9826121b0565b9050919050565b60006121bb82612167565b9050919050565b60006121cd826121d4565b9050919050565b60006121df82612167565b9050919050565b60006121f182612187565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561222457612223612271565b5b600182019050919050565b600061223a82612255565b9050919050565b6000819050919050565b6000819050919050565b6000612260826122cf565b9050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60008160601b9050919050565b6122e5816120dd565b81146122f057600080fd5b50565b6122fc816120ef565b811461230757600080fd5b50565b61231381612127565b811461231e57600080fd5b50565b61232a81612131565b811461233557600080fd5b50565b61234181612143565b811461234c57600080fd5b50565b61235881612155565b811461236357600080fd5b50565b61236f81612187565b811461237a57600080fd5b50565b61238681612191565b811461239157600080fd5b5056fea26469706673582212201df6935393ee0726ee220eab2a6bcd250ead59a2f2a8a8021403764167f93a8064736f6c63430008000033";

export class TestUserProxy__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _weth: string,
    _trancheFactory: string,
    _trancheBytecodeHash: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestUserProxy> {
    return super.deploy(
      _weth,
      _trancheFactory,
      _trancheBytecodeHash,
      overrides || {}
    ) as Promise<TestUserProxy>;
  }
  getDeployTransaction(
    _weth: string,
    _trancheFactory: string,
    _trancheBytecodeHash: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _weth,
      _trancheFactory,
      _trancheBytecodeHash,
      overrides || {}
    );
  }
  attach(address: string): TestUserProxy {
    return super.attach(address) as TestUserProxy;
  }
  connect(signer: Signer): TestUserProxy__factory {
    return super.connect(signer) as TestUserProxy__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestUserProxyInterface {
    return new utils.Interface(_abi) as TestUserProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestUserProxy {
    return new Contract(address, _abi, signerOrProvider) as TestUserProxy;
  }
}
