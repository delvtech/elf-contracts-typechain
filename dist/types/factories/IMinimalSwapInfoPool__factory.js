"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IMinimalSwapInfoPool__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "poolId",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                internalType: "uint256[]",
                name: "balances",
                type: "uint256[]",
            },
            {
                internalType: "uint256",
                name: "lastChangeBlock",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "protocolSwapFeePercentage",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "userData",
                type: "bytes",
            },
        ],
        name: "onExitPool",
        outputs: [
            {
                internalType: "uint256[]",
                name: "amountsOut",
                type: "uint256[]",
            },
            {
                internalType: "uint256[]",
                name: "dueProtocolFeeAmounts",
                type: "uint256[]",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "poolId",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                internalType: "uint256[]",
                name: "balances",
                type: "uint256[]",
            },
            {
                internalType: "uint256",
                name: "lastChangeBlock",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "protocolSwapFeePercentage",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "userData",
                type: "bytes",
            },
        ],
        name: "onJoinPool",
        outputs: [
            {
                internalType: "uint256[]",
                name: "amountsIn",
                type: "uint256[]",
            },
            {
                internalType: "uint256[]",
                name: "dueProtocolFeeAmounts",
                type: "uint256[]",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "enum IVault.SwapKind",
                        name: "kind",
                        type: "uint8",
                    },
                    {
                        internalType: "contract IERC20",
                        name: "tokenIn",
                        type: "address",
                    },
                    {
                        internalType: "contract IERC20",
                        name: "tokenOut",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes32",
                        name: "poolId",
                        type: "bytes32",
                    },
                    {
                        internalType: "uint256",
                        name: "lastChangeBlock",
                        type: "uint256",
                    },
                    {
                        internalType: "address",
                        name: "from",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "to",
                        type: "address",
                    },
                    {
                        internalType: "bytes",
                        name: "userData",
                        type: "bytes",
                    },
                ],
                internalType: "struct IPoolSwapStructs.SwapRequest",
                name: "swapRequest",
                type: "tuple",
            },
            {
                internalType: "uint256",
                name: "currentBalanceTokenIn",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "currentBalanceTokenOut",
                type: "uint256",
            },
        ],
        name: "onSwap",
        outputs: [
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var IMinimalSwapInfoPool__factory = /** @class */ (function () {
    function IMinimalSwapInfoPool__factory() {
    }
    IMinimalSwapInfoPool__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    IMinimalSwapInfoPool__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    IMinimalSwapInfoPool__factory.abi = _abi;
    return IMinimalSwapInfoPool__factory;
}());
exports.IMinimalSwapInfoPool__factory = IMinimalSwapInfoPool__factory;