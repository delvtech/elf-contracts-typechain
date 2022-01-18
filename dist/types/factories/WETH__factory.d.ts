import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { WETH, WETHInterface } from "../WETH";
export declare class WETH__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(sender: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<WETH>;
    getDeployTransaction(sender: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): WETH;
    connect(signer: Signer): WETH__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b50604051620016df380380620016df833981810160405281019062000037919062000404565b6040518060400160405280600d81526020017f57726170706564204574686572000000000000000000000000000000000000008152506040518060400160405280600481526020017f57455448000000000000000000000000000000000000000000000000000000008152508160009080519060200190620000bb9291906200033d565b508060019080519060200190620000d49291906200033d565b506012600260006101000a81548160ff021916908360ff1602179055507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600460008073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600460003073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050620001cd6012620001f760201b60201c565b620001f0817002f050fe938943acc45f655680000000006200021560201b60201c565b50620005a7565b80600260006101000a81548160ff021916908360ff16021790555050565b6200022782826200022b60201b60201c565b5050565b806003546200023b91906200045e565b60038190555080600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546200028e91906200045e565b600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405162000331919062000441565b60405180910390a35050565b8280546200034b90620004f9565b90600052602060002090601f0160209004810192826200036f5760008555620003bb565b82601f106200038a57805160ff1916838001178555620003bb565b82800160010185558215620003bb579182015b82811115620003ba5782518255916020019190600101906200039d565b5b509050620003ca9190620003ce565b5090565b5b80821115620003e9576000816000905550600101620003cf565b5090565b600081519050620003fe816200058d565b92915050565b6000602082840312156200041757600080fd5b60006200042784828501620003ed565b91505092915050565b6200043b81620004ef565b82525050565b600060208201905062000458600083018462000430565b92915050565b60006200046b82620004ef565b91506200047883620004ef565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115620004b057620004af6200052f565b5b828201905092915050565b6000620004c882620004cf565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060028204905060018216806200051257607f821691505b602082108114156200052957620005286200055e565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6200059881620004bb565b8114620005a457600080fd5b50565b61112880620005b76000396000f3fe6080604052600436106100a75760003560e01c806340c10f191161006457806340c10f19146101d057806370a08231146101f957806395d89b4114610236578063a9059cbb14610261578063d0e30db01461029e578063dd62ed3e146102a8576100a7565b806306fdde03146100ac578063095ea7b3146100d757806318160ddd1461011457806323b872dd1461013f5780632e1a7d4d1461017c578063313ce567146101a5575b600080fd5b3480156100b857600080fd5b506100c16102e5565b6040516100ce9190610e5d565b60405180910390f35b3480156100e357600080fd5b506100fe60048036038101906100f99190610cf7565b610373565b60405161010b9190610e42565b60405180910390f35b34801561012057600080fd5b50610129610465565b6040516101369190610ebf565b60405180910390f35b34801561014b57600080fd5b5061016660048036038101906101619190610ca8565b61046f565b6040516101739190610e42565b60405180910390f35b34801561018857600080fd5b506101a3600480360381019061019e9190610d33565b6107f8565b005b3480156101b157600080fd5b506101ba610861565b6040516101c79190610eda565b60405180910390f35b3480156101dc57600080fd5b506101f760048036038101906101f29190610cf7565b610874565b005b34801561020557600080fd5b50610220600480360381019061021b9190610c43565b610882565b60405161022d9190610ebf565b60405180910390f35b34801561024257600080fd5b5061024b6108cb565b6040516102589190610e5d565b60405180910390f35b34801561026d57600080fd5b5061028860048036038101906102839190610cf7565b610959565b6040516102959190610e42565b60405180910390f35b6102a661096e565b005b3480156102b457600080fd5b506102cf60048036038101906102ca9190610c6c565b61097a565b6040516102dc9190610ebf565b60405180910390f35b600080546102f290611023565b80601f016020809104026020016040519081016040528092919081815260200182805461031e90611023565b801561036b5780601f106103405761010080835404028352916020019161036b565b820191906000526020600020905b81548152906001019060200180831161034e57829003601f168201915b505050505081565b600081600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516104539190610ebf565b60405180910390a36001905092915050565b6000600354905090565b600080600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506000600560008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905083821015610578576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161056f90610e9f565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff16141580156105d457507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114155b156106a9578381101561061c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161061390610e7f565b60405180910390fd5b83816106289190610f67565b600560008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b83826106b59190610f67565b600460008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555083600460008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546107439190610f11565b600460008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef866040516107e39190610ebf565b60405180910390a36001925050509392505050565b8061080233610882565b101561080d57600080fd5b6108173382610a01565b3373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f1935050505015801561085d573d6000803e3d6000fd5b5050565b600260009054906101000a900460ff1681565b61087e8282610b0d565b5050565b6000600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600180546108d890611023565b80601f016020809104026020016040519081016040528092919081815260200182805461090490611023565b80156109515780601f1061092657610100808354040283529160200191610951565b820191906000526020600020905b81548152906001019060200180831161093457829003601f168201915b505050505081565b600061096633848461046f565b905092915050565b6109783334610b0d565b565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b80600354610a0f9190610f67565b60038190555080600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610a609190610f67565b600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610b019190610ebf565b60405180910390a35050565b80600354610b1b9190610f11565b60038190555080600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610b6c9190610f11565b600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610c0d9190610ebf565b60405180910390a35050565b600081359050610c28816110c4565b92915050565b600081359050610c3d816110db565b92915050565b600060208284031215610c5557600080fd5b6000610c6384828501610c19565b91505092915050565b60008060408385031215610c7f57600080fd5b6000610c8d85828601610c19565b9250506020610c9e85828601610c19565b9150509250929050565b600080600060608486031215610cbd57600080fd5b6000610ccb86828701610c19565b9350506020610cdc86828701610c19565b9250506040610ced86828701610c2e565b9150509250925092565b60008060408385031215610d0a57600080fd5b6000610d1885828601610c19565b9250506020610d2985828601610c2e565b9150509250929050565b600060208284031215610d4557600080fd5b6000610d5384828501610c2e565b91505092915050565b610d6581610fad565b82525050565b6000610d7682610ef5565b610d808185610f00565b9350610d90818560208601610ff0565b610d99816110b3565b840191505092915050565b6000610db1601d83610f00565b91507f45524332303a20696e73756666696369656e742d616c6c6f77616e63650000006000830152602082019050919050565b6000610df1601b83610f00565b91507f45524332303a20696e73756666696369656e742d62616c616e636500000000006000830152602082019050919050565b610e2d81610fd9565b82525050565b610e3c81610fe3565b82525050565b6000602082019050610e576000830184610d5c565b92915050565b60006020820190508181036000830152610e778184610d6b565b905092915050565b60006020820190508181036000830152610e9881610da4565b9050919050565b60006020820190508181036000830152610eb881610de4565b9050919050565b6000602082019050610ed46000830184610e24565b92915050565b6000602082019050610eef6000830184610e33565b92915050565b600081519050919050565b600082825260208201905092915050565b6000610f1c82610fd9565b9150610f2783610fd9565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610f5c57610f5b611055565b5b828201905092915050565b6000610f7282610fd9565b9150610f7d83610fd9565b925082821015610f9057610f8f611055565b5b828203905092915050565b6000610fa682610fb9565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b8381101561100e578082015181840152602081019050610ff3565b8381111561101d576000848401525b50505050565b6000600282049050600182168061103b57607f821691505b6020821081141561104f5761104e611084565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b6110cd81610f9b565b81146110d857600080fd5b50565b6110e481610fd9565b81146110ef57600080fd5b5056fea2646970667358221220d2bd67e32e750ce0c6f2612fd7f4f465a28fc1337683738d56bb78db440afc3264736f6c63430008000033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): WETHInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): WETH;
}
