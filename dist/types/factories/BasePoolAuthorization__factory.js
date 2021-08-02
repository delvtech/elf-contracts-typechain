"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasePoolAuthorization__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "selector",
                type: "bytes4",
            },
        ],
        name: "getActionId",
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
        name: "getAuthorizer",
        outputs: [
            {
                internalType: "contract IAuthorizer",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getOwner",
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
];
var BasePoolAuthorization__factory = /** @class */ (function () {
    function BasePoolAuthorization__factory() {
    }
    BasePoolAuthorization__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    BasePoolAuthorization__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    BasePoolAuthorization__factory.abi = _abi;
    return BasePoolAuthorization__factory;
}());
exports.BasePoolAuthorization__factory = BasePoolAuthorization__factory;