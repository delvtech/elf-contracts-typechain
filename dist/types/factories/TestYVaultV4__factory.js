"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestYVaultV4__factory = void 0;
const ethers_1 = require("ethers");
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
        inputs: [],
        name: "apiVersion",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "pure",
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
const _bytecode = "0x60806040523480156200001157600080fd5b5060405162002abf38038062002abf8339818101604052810190620000379190620003d2565b81816040518060400160405280600b81526020017f746573742079746f6b656e0000000000000000000000000000000000000000008152506040518060400160405280600681526020017f79546f6b656e00000000000000000000000000000000000000000000000000008152508160009080519060200190620000bd929190620002f4565b508060019080519060200190620000d6929190620002f4565b506012600260006101000a81548160ff021916908360ff1602179055507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600360008073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600360003073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550620001cb620002d460201b60201c565b7f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6000604051620001fd9190620004d1565b60405180910390206040518060400160405280600181526020017f31000000000000000000000000000000000000000000000000000000000000008152508051906020012046306040516020016200025a959493929190620004ea565b60405160208183030381529060405280519060200120600681905550505081600860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550620002ca81620002d660201b60201c565b5050505062000655565b565b80600260006101000a81548160ff021916908360ff16021790555050565b8280546200030290620005bc565b90600052602060002090601f01602090048101928262000326576000855562000372565b82601f106200034157805160ff191683800117855562000372565b8280016001018555821562000372579182015b828111156200037157825182559160200191906001019062000354565b5b50905062000381919062000385565b5090565b5b80821115620003a057600081600090555060010162000386565b5090565b600081519050620003b58162000621565b92915050565b600081519050620003cc816200063b565b92915050565b60008060408385031215620003e657600080fd5b6000620003f685828601620003a4565b92505060206200040985828601620003bb565b9150509250929050565b6200041e8162000567565b82525050565b6200042f816200057b565b82525050565b600081546200044481620005bc565b6200045081866200055c565b945060018216600081146200046e57600181146200048057620004b7565b60ff19831686528186019350620004b7565b6200048b8562000547565b60005b83811015620004af578154818901526001820191506020810190506200048e565b838801955050505b50505092915050565b620004cb81620005a5565b82525050565b6000620004df828462000435565b915081905092915050565b600060a08201905062000501600083018862000424565b62000510602083018762000424565b6200051f604083018662000424565b6200052e6060830185620004c0565b6200053d608083018462000413565b9695505050505050565b60008190508160005260206000209050919050565b600081905092915050565b6000620005748262000585565b9050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60006002820490506001821680620005d557607f821691505b60208210811415620005ec57620005eb620005f2565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6200062c8162000567565b81146200063857600080fd5b50565b6200064681620005af565b81146200065257600080fd5b50565b61245a80620006656000396000f3fe608060405234801561001057600080fd5b50600436106101425760003560e01c80636e553f65116100b8578063a9059cbb1161007c578063a9059cbb1461036d578063bdc8144b1461039d578063d505accf146103b9578063dd62ed3e146103d5578063e63697c814610405578063fc0c546a1461043557610142565b80636e553f65146102a157806370a08231146102d15780637ecebe001461030157806395d89b411461033157806399530b061461034f57610142565b8063258294101161010a57806325829410146102015780632a4100681461021f57806330adf81f14610229578063313ce567146102475780633644e515146102655780635aa6e6751461028357610142565b806301e1d1141461014757806306fdde0314610165578063095ea7b31461018357806318160ddd146101b357806323b872dd146101d1575b600080fd5b61014f610453565b60405161015c9190611f0c565b60405180910390f35b61016d610505565b60405161017a9190611e0a565b60405180910390f35b61019d60048036038101906101989190611879565b610593565b6040516101aa9190611d2e565b60405180910390f35b6101bb610685565b6040516101c89190611f0c565b60405180910390f35b6101eb60048036038101906101e6919061178c565b61068b565b6040516101f89190611d2e565b60405180910390f35b610209610a0e565b6040516102169190611e0a565b60405180910390f35b610227610a4b565b005b610231610b98565b60405161023e9190611d49565b60405180910390f35b61024f610bbf565b60405161025c9190611f27565b60405180910390f35b61026d610bd2565b60405161027a9190611d49565b60405180910390f35b61028b610bd8565b6040516102989190611cb3565b60405180910390f35b6102bb60048036038101906102b69190611930565b610c15565b6040516102c89190611f0c565b60405180910390f35b6102eb60048036038101906102e69190611727565b610d2d565b6040516102f89190611f0c565b60405180910390f35b61031b60048036038101906103169190611727565b610d45565b6040516103289190611f0c565b60405180910390f35b610339610d5d565b6040516103469190611e0a565b60405180910390f35b610357610deb565b6040516103649190611f0c565b60405180910390f35b61038760048036038101906103829190611879565b610f03565b6040516103949190611d2e565b60405180910390f35b6103b760048036038101906103b291906118de565b610f18565b005b6103d360048036038101906103ce91906117db565b610f53565b005b6103ef60048036038101906103ea9190611750565b611339565b6040516103fc9190611f0c565b60405180910390f35b61041f600480360381019061041a919061196c565b61135e565b60405161042c9190611f0c565b60405180910390f35b61043d611461565b60405161044a9190611cb3565b60405180910390f35b6000600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016104b09190611cb3565b60206040518083038186803b1580156104c857600080fd5b505afa1580156104dc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105009190611907565b905090565b6000805461051290612281565b80601f016020809104026020016040519081016040528092919081815260200182805461053e90612281565b801561058b5780601f106105605761010080835404028352916020019161058b565b820191906000526020600020905b81548152906001019060200180831161056e57829003601f168201915b505050505081565b600081600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516106739190611f0c565b60405180910390a36001905092915050565b60075481565b600080600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082811015610713576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161070a90611ecc565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16146108c0576000600460008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146108be5783811015610831576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082890611e2c565b60405180910390fd5b838161083d91906121bb565b600460008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b505b82816108cc91906121bb565b600360008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555082600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461095a9190611f69565b600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef856040516109fa9190611f0c565b60405180910390a360019150509392505050565b60606040518060400160405280600581526020017f302e342e32000000000000000000000000000000000000000000000000000000815250905090565b6000600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401610aa89190611cb3565b60206040518083038186803b158015610ac057600080fd5b505afa158015610ad4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610af89190611907565b9050600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f1930600a84610b469190611fbf565b6040518363ffffffff1660e01b8152600401610b63929190611d05565b600060405180830381600087803b158015610b7d57600080fd5b505af1158015610b91573d6000803e3d6000fd5b5050505050565b7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c960001b81565b600260009054906101000a900460ff1681565b60065481565b60006040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c0c90611eec565b60405180910390fd5b60008060006007541415610c2b57839050610c67565b610c33610deb565b600260009054906101000a900460ff16600a610c4f9190612043565b85610c5a9190612161565b610c649190611fbf565b90505b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330876040518463ffffffff1660e01b8152600401610cc693929190611cce565b602060405180830381600087803b158015610ce057600080fd5b505af1158015610cf4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d1891906118b5565b50610d238382611487565b8091505092915050565b60036020528060005260406000206000915090505481565b60056020528060005260406000206000915090505481565b60018054610d6a90612281565b80601f0160208091040260200160405190810160405280929190818152602001828054610d9690612281565b8015610de35780601f10610db857610100808354040283529160200191610de3565b820191906000526020600020905b815481529060010190602001808311610dc657829003601f168201915b505050505081565b600080600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401610e499190611cb3565b60206040518083038186803b158015610e6157600080fd5b505afa158015610e75573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e999190611907565b90506000811415610ec857600260009054906101000a900460ff16600a610ec09190612043565b915050610f00565b600754600260009054906101000a900460ff16600a610ee79190612043565b82610ef29190612161565b610efc9190611fbf565b9150505b90565b6000610f1033848461068b565b905092915050565b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f4a90611eec565b60405180910390fd5b60006006547f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c960001b898989600560008e73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548a604051602001610fd596959493929190611d64565b60405160208183030381529060405280519060200120604051602001610ffc929190611c7c565b604051602081830303815290604052805190602001209050600073ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff161415611084576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161107b90611e6c565b60405180910390fd5b600181858585604051600081526020016040526040516110a79493929190611dc5565b6020604051602081039080840390855afa1580156110c9573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff1614611140576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161113790611e8c565b60405180910390fd5b600085148061114f5750844211155b61118e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161118590611eac565b60405180910390fd5b7f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08260001c11156111f4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111eb90611e4c565b60405180910390fd5b600560008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815480929190611244906122b3565b919050555085600460008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508673ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925886040516113279190611f0c565b60405180910390a35050505050505050565b6004602052816000526040600020602052806000526040600020600091509150505481565b600080600260009054906101000a900460ff16600a61137d9190612043565b611385610deb565b866113909190612161565b61139a9190611fbf565b90506113a63386611598565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb85836040518363ffffffff1660e01b8152600401611403929190611d05565b602060405180830381600087803b15801561141d57600080fd5b505af1158015611431573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061145591906118b5565b50809150509392505050565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b80600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546114d29190611f69565b600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555080600760008282546115279190611f69565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161158c9190611f0c565b60405180910390a35050565b80600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546115e391906121bb565b600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550806007600082825461163891906121bb565b92505081905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161169d9190611f0c565b60405180910390a35050565b6000813590506116b8816123b1565b92915050565b6000815190506116cd816123c8565b92915050565b6000813590506116e2816123df565b92915050565b6000813590506116f7816123f6565b92915050565b60008151905061170c816123f6565b92915050565b6000813590506117218161240d565b92915050565b60006020828403121561173957600080fd5b6000611747848285016116a9565b91505092915050565b6000806040838503121561176357600080fd5b6000611771858286016116a9565b9250506020611782858286016116a9565b9150509250929050565b6000806000606084860312156117a157600080fd5b60006117af868287016116a9565b93505060206117c0868287016116a9565b92505060406117d1868287016116e8565b9150509250925092565b600080600080600080600060e0888a0312156117f657600080fd5b60006118048a828b016116a9565b97505060206118158a828b016116a9565b96505060406118268a828b016116e8565b95505060606118378a828b016116e8565b94505060806118488a828b01611712565b93505060a06118598a828b016116d3565b92505060c061186a8a828b016116d3565b91505092959891949750929550565b6000806040838503121561188c57600080fd5b600061189a858286016116a9565b92505060206118ab858286016116e8565b9150509250929050565b6000602082840312156118c757600080fd5b60006118d5848285016116be565b91505092915050565b6000602082840312156118f057600080fd5b60006118fe848285016116e8565b91505092915050565b60006020828403121561191957600080fd5b6000611927848285016116fd565b91505092915050565b6000806040838503121561194357600080fd5b6000611951858286016116e8565b9250506020611962858286016116a9565b9150509250929050565b60008060006060848603121561198157600080fd5b600061198f868287016116e8565b93505060206119a0868287016116a9565b92505060406119b1868287016116e8565b9150509250925092565b6119c4816121ef565b82525050565b6119d381612201565b82525050565b6119e28161220d565b82525050565b6119f96119f48261220d565b6122fc565b82525050565b6000611a0a82611f42565b611a148185611f4d565b9350611a2481856020860161224e565b611a2d81612393565b840191505092915050565b6000611a45601d83611f4d565b91507f45524332303a20696e73756666696369656e742d616c6c6f77616e63650000006000830152602082019050919050565b6000611a85600283611f5e565b91507f19010000000000000000000000000000000000000000000000000000000000006000830152600282019050919050565b6000611ac5602283611f4d565b91507f45524332303a20696e76616c6964207369676e6174757265202773272076616c60008301527f75650000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611b2b601883611f4d565b91507f45524332303a20696e76616c69642d616464726573732d3000000000000000006000830152602082019050919050565b6000611b6b601583611f4d565b91507f45524332303a20696e76616c69642d7065726d697400000000000000000000006000830152602082019050919050565b6000611bab601583611f4d565b91507f45524332303a207065726d69742d6578706972656400000000000000000000006000830152602082019050919050565b6000611beb601b83611f4d565b91507f45524332303a20696e73756666696369656e742d62616c616e636500000000006000830152602082019050919050565b6000611c2b600d83611f4d565b91507f556e696d706c656d656e746564000000000000000000000000000000000000006000830152602082019050919050565b611c6781612237565b82525050565b611c7681612241565b82525050565b6000611c8782611a78565b9150611c9382856119e8565b602082019150611ca382846119e8565b6020820191508190509392505050565b6000602082019050611cc860008301846119bb565b92915050565b6000606082019050611ce360008301866119bb565b611cf060208301856119bb565b611cfd6040830184611c5e565b949350505050565b6000604082019050611d1a60008301856119bb565b611d276020830184611c5e565b9392505050565b6000602082019050611d4360008301846119ca565b92915050565b6000602082019050611d5e60008301846119d9565b92915050565b600060c082019050611d7960008301896119d9565b611d8660208301886119bb565b611d9360408301876119bb565b611da06060830186611c5e565b611dad6080830185611c5e565b611dba60a0830184611c5e565b979650505050505050565b6000608082019050611dda60008301876119d9565b611de76020830186611c6d565b611df460408301856119d9565b611e0160608301846119d9565b95945050505050565b60006020820190508181036000830152611e2481846119ff565b905092915050565b60006020820190508181036000830152611e4581611a38565b9050919050565b60006020820190508181036000830152611e6581611ab8565b9050919050565b60006020820190508181036000830152611e8581611b1e565b9050919050565b60006020820190508181036000830152611ea581611b5e565b9050919050565b60006020820190508181036000830152611ec581611b9e565b9050919050565b60006020820190508181036000830152611ee581611bde565b9050919050565b60006020820190508181036000830152611f0581611c1e565b9050919050565b6000602082019050611f216000830184611c5e565b92915050565b6000602082019050611f3c6000830184611c6d565b92915050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b6000611f7482612237565b9150611f7f83612237565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611fb457611fb3612306565b5b828201905092915050565b6000611fca82612237565b9150611fd583612237565b925082611fe557611fe4612335565b5b828204905092915050565b6000808291508390505b600185111561203a5780860481111561201657612015612306565b5b60018516156120255780820291505b8081029050612033856123a4565b9450611ffa565b94509492505050565b600061204e82612237565b915061205983612241565b92506120867fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff848461208e565b905092915050565b60008261209e576001905061215a565b816120ac576000905061215a565b81600181146120c257600281146120cc576120fb565b600191505061215a565b60ff8411156120de576120dd612306565b5b8360020a9150848211156120f5576120f4612306565b5b5061215a565b5060208310610133831016604e8410600b84101617156121305782820a90508381111561212b5761212a612306565b5b61215a565b61213d8484846001611ff0565b9250905081840481111561215457612153612306565b5b81810290505b9392505050565b600061216c82612237565b915061217783612237565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156121b0576121af612306565b5b828202905092915050565b60006121c682612237565b91506121d183612237565b9250828210156121e4576121e3612306565b5b828203905092915050565b60006121fa82612217565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b8381101561226c578082015181840152602081019050612251565b8381111561227b576000848401525b50505050565b6000600282049050600182168061229957607f821691505b602082108114156122ad576122ac612364565b5b50919050565b60006122be82612237565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156122f1576122f0612306565b5b600182019050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b60008160011c9050919050565b6123ba816121ef565b81146123c557600080fd5b50565b6123d181612201565b81146123dc57600080fd5b50565b6123e88161220d565b81146123f357600080fd5b50565b6123ff81612237565b811461240a57600080fd5b50565b61241681612241565b811461242157600080fd5b5056fea26469706673582212200921195ddee3e7ac57ca87b3c234e7003483d7068395a20dbab7b015c5c8da5c64736f6c63430008000033";
class TestYVaultV4__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (args.length === 1) {
            super(_abi, _bytecode, args[0]);
        }
        else {
            super(...args);
        }
    }
    deploy(_token, _decimals, overrides) {
        return super.deploy(_token, _decimals, overrides || {});
    }
    getDeployTransaction(_token, _decimals, overrides) {
        return super.getDeployTransaction(_token, _decimals, overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.TestYVaultV4__factory = TestYVaultV4__factory;
TestYVaultV4__factory.bytecode = _bytecode;
TestYVaultV4__factory.abi = _abi;
