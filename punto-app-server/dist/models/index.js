"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Producto = exports.Categoria = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const categoria_1 = __importDefault(require("./schemas/categoria"));
const producto_1 = __importDefault(require("./schemas/producto"));
exports.Categoria = mongoose_1.default.model("Categoria", categoria_1.default);
exports.Producto = mongoose_1.default.model("Producto", producto_1.default);
