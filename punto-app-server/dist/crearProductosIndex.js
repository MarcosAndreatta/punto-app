"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const algoliasearch_1 = __importDefault(require("algoliasearch"));
const algoliaclient = (0, algoliasearch_1.default)("D6NJJQ6OET", "09b8482b577109d04b364955b50760c1");
const puntoProductosIndex = algoliaclient.initIndex("puntoProductos");
exports.default = puntoProductosIndex;
