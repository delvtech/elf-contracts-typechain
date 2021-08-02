"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authentication__factory = void 0;
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
];
var Authentication__factory = /** @class */ (function () {
    function Authentication__factory() {
    }
    Authentication__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    Authentication__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    Authentication__factory.abi = _abi;
    return Authentication__factory;
}());
exports.Authentication__factory = Authentication__factory;