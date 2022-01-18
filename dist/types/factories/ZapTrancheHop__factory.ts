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
import type { ZapTrancheHop, ZapTrancheHopInterface } from "../ZapTrancheHop";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "__trancheFactory",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "__trancheBytecodeHash",
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
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_underlying",
        type: "address",
      },
      {
        internalType: "address",
        name: "_positionFrom",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_expirationFrom",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_positionTo",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_expirationTo",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amountPt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amountYt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_ptExpected",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_ytExpected",
        type: "uint256",
      },
    ],
    name: "hopToTranche",
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
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "rescueTokens",
    outputs: [],
    stateMutability: "nonpayable",
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
];

const _bytecode =
  "0x60c06040526000600260006101000a81548160ff0219169083151502179055503480156200002c57600080fd5b506040516200171138038062001711833981810160405281019062000052919062000172565b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550620000a333620000ea60201b60201c565b8173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815250508060a08181525050505062000225565b60018060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b6000815190506200015581620001f1565b92915050565b6000815190506200016c816200020b565b92915050565b600080604083850312156200018657600080fd5b6000620001968582860162000144565b9250506020620001a9858286016200015b565b9150509250929050565b6000620001c082620001d1565b9050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b620001fc81620001b3565b81146200020857600080fd5b50565b6200021681620001c7565b81146200022257600080fd5b50565b60805160601c60a0516114c36200024e6000396000610bd201526000610bb001526114c36000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c80638da5cb5b116100665780638da5cb5b14610131578063b6a5d7de1461014f578063b91816111461016b578063f5019c4f1461019b578063fe9fbb80146101cc5761009e565b806313af4035146100a357806327c97fa5146100bf57806333eeb147146100db57806357376198146100f957806364eda74b14610115575b600080fd5b6100bd60048036038101906100b89190610cbd565b6101fc565b005b6100d960048036038101906100d49190610cbd565b6102cd565b005b6100e36103b6565b6040516100f09190611186565b60405180910390f35b610113600480360381019061010e9190610ce6565b6103c9565b005b61012f600480360381019061012a9190610d22565b6104ef565b005b610139610554565b604051610146919061110b565b60405180910390f35b61016960048036038101906101649190610cbd565b610578565b005b61018560048036038101906101809190610cbd565b610612565b6040516101929190611186565b60405180910390f35b6101b560048036038101906101b09190610d74565b610632565b6040516101c392919061126a565b60405180910390f35b6101e660048036038101906101e19190610cbd565b610ac9565b6040516101f39190611186565b60405180910390f35b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461028a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610281906111a1565b60405180910390fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461035b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610352906111a1565b60405180910390fd5b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b600260009054906101000a900460ff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610457576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161044e906111a1565b60405180910390fd5b60008290508073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33846040518363ffffffff1660e01b815260040161049792919061115d565b602060405180830381600087803b1580156104b157600080fd5b505af11580156104c5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104e99190610d4b565b50505050565b6104f833610ac9565b610537576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161052e906111c1565b60405180910390fd5b80600260006101000a81548160ff02191690831515021790555050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610606576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105fd906111a1565b60405180910390fd5b61060f81610b1f565b50565b60016020528060005260406000206000915054906101000a900460ff1681565b600080600260009054906101000a900460ff1615610685576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161067c90611201565b60405180910390fd5b60006106918b8b610b79565b9050600061069f8a8a610b79565b90506000808911156107d6578273ffffffffffffffffffffffffffffffffffffffff166323b872dd33308c6040518463ffffffff1660e01b81526004016106e893929190611126565b602060405180830381600087803b15801561070257600080fd5b505af1158015610716573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061073a9190610d4b565b508273ffffffffffffffffffffffffffffffffffffffff1663884e17f38a8d6040518363ffffffff1660e01b8152600401610776929190611241565b602060405180830381600087803b15801561079057600080fd5b505af11580156107a4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107c89190610e63565b816107d391906112a4565b90505b600088111561098d5760008373ffffffffffffffffffffffffffffffffffffffff1663764b666c6040518163ffffffff1660e01b815260040160206040518083038186803b15801561082757600080fd5b505afa15801561083b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061085f9190610e3a565b90508073ffffffffffffffffffffffffffffffffffffffff166323b872dd33308c6040518463ffffffff1660e01b815260040161089e93929190611126565b602060405180830381600087803b1580156108b857600080fd5b505af11580156108cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108f09190610d4b565b508373ffffffffffffffffffffffffffffffffffffffff16631210aac28a8e6040518363ffffffff1660e01b815260040161092c929190611241565b602060405180830381600087803b15801561094657600080fd5b505af115801561095a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061097e9190610e63565b8261098991906112a4565b9150505b6000808373ffffffffffffffffffffffffffffffffffffffff166385f45c88336040518263ffffffff1660e01b81526004016109c9919061110b565b6040805180830381600087803b1580156109e257600080fd5b505af11580156109f6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a1a9190610e8c565b91509150828110158015610a2e5750878110155b610a6d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a6490611221565b60405180910390fd5b88821015610ab0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aa7906111e1565b60405180910390fd5b8181965096505050505050995099975050505050505050565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b60018060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b6000808383604051602001610b8f929190611091565b604051602081830303815290604052805190602001209050600060ff60f81b7f0000000000000000000000000000000000000000000000000000000000000000837f0000000000000000000000000000000000000000000000000000000000000000604051602001610c0494939291906110bd565b6040516020818303038152906040528051906020012090508060001c9250505092915050565b600081359050610c398161141a565b92915050565b600081359050610c4e81611431565b92915050565b600081519050610c6381611431565b92915050565b600081359050610c7881611448565b92915050565b600081519050610c8d8161145f565b92915050565b600081359050610ca281611476565b92915050565b600081519050610cb781611476565b92915050565b600060208284031215610ccf57600080fd5b6000610cdd84828501610c2a565b91505092915050565b60008060408385031215610cf957600080fd5b6000610d0785828601610c2a565b9250506020610d1885828601610c93565b9150509250929050565b600060208284031215610d3457600080fd5b6000610d4284828501610c3f565b91505092915050565b600060208284031215610d5d57600080fd5b6000610d6b84828501610c54565b91505092915050565b60008060008060008060008060006101208a8c031215610d9357600080fd5b6000610da18c828d01610c69565b9950506020610db28c828d01610c2a565b9850506040610dc38c828d01610c93565b9750506060610dd48c828d01610c2a565b9650506080610de58c828d01610c93565b95505060a0610df68c828d01610c93565b94505060c0610e078c828d01610c93565b93505060e0610e188c828d01610c93565b925050610100610e2a8c828d01610c93565b9150509295985092959850929598565b600060208284031215610e4c57600080fd5b6000610e5a84828501610c7e565b91505092915050565b600060208284031215610e7557600080fd5b6000610e8384828501610ca8565b91505092915050565b60008060408385031215610e9f57600080fd5b6000610ead85828601610ca8565b9250506020610ebe85828601610ca8565b9150509250929050565b610ed1816112fa565b82525050565b610ee8610ee3826112fa565b61139c565b82525050565b610ef78161130c565b82525050565b610f0e610f0982611318565b6113ae565b82525050565b610f25610f2082611344565b6113b8565b82525050565b6000610f38601083611293565b91507f53656e646572206e6f74206f776e6572000000000000000000000000000000006000830152602082019050919050565b6000610f78601583611293565b91507f53656e646572206e6f7420417574686f72697a656400000000000000000000006000830152602082019050919050565b6000610fb8601483611293565b91507f4e6f7420656e6f756768205054206d696e7465640000000000000000000000006000830152602082019050919050565b6000610ff8600f83611293565b91507f436f6e74726163742066726f7a656e00000000000000000000000000000000006000830152602082019050919050565b6000611038601483611293565b91507f4e6f7420656e6f756768205954206d696e7465640000000000000000000000006000830152602082019050919050565b61107481611392565b82525050565b61108b61108682611392565b6113d4565b82525050565b600061109d8285610ed7565b6014820191506110ad828461107a565b6020820191508190509392505050565b60006110c98287610efd565b6001820191506110d98286610ed7565b6014820191506110e98285610f14565b6020820191506110f98284610f14565b60208201915081905095945050505050565b60006020820190506111206000830184610ec8565b92915050565b600060608201905061113b6000830186610ec8565b6111486020830185610ec8565b611155604083018461106b565b949350505050565b60006040820190506111726000830185610ec8565b61117f602083018461106b565b9392505050565b600060208201905061119b6000830184610eee565b92915050565b600060208201905081810360008301526111ba81610f2b565b9050919050565b600060208201905081810360008301526111da81610f6b565b9050919050565b600060208201905081810360008301526111fa81610fab565b9050919050565b6000602082019050818103600083015261121a81610feb565b9050919050565b6000602082019050818103600083015261123a8161102b565b9050919050565b6000604082019050611256600083018561106b565b6112636020830184610ec8565b9392505050565b600060408201905061127f600083018561106b565b61128c602083018461106b565b9392505050565b600082825260208201905092915050565b60006112af82611392565b91506112ba83611392565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156112ef576112ee6113de565b5b828201905092915050565b600061130582611372565b9050919050565b60008115159050919050565b60007fff0000000000000000000000000000000000000000000000000000000000000082169050919050565b6000819050919050565b6000611359826112fa565b9050919050565b600061136b826112fa565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006113a7826113c2565b9050919050565b6000819050919050565b6000819050919050565b60006113cd8261140d565b9050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008160601b9050919050565b611423816112fa565b811461142e57600080fd5b50565b61143a8161130c565b811461144557600080fd5b50565b6114518161134e565b811461145c57600080fd5b50565b61146881611360565b811461147357600080fd5b50565b61147f81611392565b811461148a57600080fd5b5056fea26469706673582212203be05e82f095af9405c0e09b0b9727c3f1bfc2854eacbc291009ce28b8fd855564736f6c63430008000033";

export class ZapTrancheHop__factory extends ContractFactory {
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
    __trancheFactory: string,
    __trancheBytecodeHash: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ZapTrancheHop> {
    return super.deploy(
      __trancheFactory,
      __trancheBytecodeHash,
      overrides || {}
    ) as Promise<ZapTrancheHop>;
  }
  getDeployTransaction(
    __trancheFactory: string,
    __trancheBytecodeHash: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      __trancheFactory,
      __trancheBytecodeHash,
      overrides || {}
    );
  }
  attach(address: string): ZapTrancheHop {
    return super.attach(address) as ZapTrancheHop;
  }
  connect(signer: Signer): ZapTrancheHop__factory {
    return super.connect(signer) as ZapTrancheHop__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ZapTrancheHopInterface {
    return new utils.Interface(_abi) as ZapTrancheHopInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ZapTrancheHop {
    return new Contract(address, _abi, signerOrProvider) as ZapTrancheHop;
  }
}
