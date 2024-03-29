"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockReserveConfiguration__factory = exports.MockL2Pool__factory = exports.MockIncentivesController__factory = exports.selfDestructTransferSol = exports.mockPoolSol = exports.mockPeripheryContractSol = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
exports.mockPeripheryContractSol = __importStar(require("./MockPeripheryContract.sol"));
exports.mockPoolSol = __importStar(require("./MockPool.sol"));
exports.selfDestructTransferSol = __importStar(require("./SelfDestructTransfer.sol"));
var MockIncentivesController__factory_1 = require("./MockIncentivesController__factory");
Object.defineProperty(exports, "MockIncentivesController__factory", { enumerable: true, get: function () { return MockIncentivesController__factory_1.MockIncentivesController__factory; } });
var MockL2Pool__factory_1 = require("./MockL2Pool__factory");
Object.defineProperty(exports, "MockL2Pool__factory", { enumerable: true, get: function () { return MockL2Pool__factory_1.MockL2Pool__factory; } });
var MockReserveConfiguration__factory_1 = require("./MockReserveConfiguration__factory");
Object.defineProperty(exports, "MockReserveConfiguration__factory", { enumerable: true, get: function () { return MockReserveConfiguration__factory_1.MockReserveConfiguration__factory; } });
