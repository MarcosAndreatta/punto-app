"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const borrarProducto_1 = __importDefault(require("./borrarProducto"));
const crearProducto_1 = __importDefault(require("./crearProducto"));
const modificarProducto_1 = __importDefault(require("./modificarProducto"));
const obtenerProductos_1 = __importDefault(require("./obtenerProductos"));
class ProductosController {
    constructor() {
        this.router = express_1.default.Router();
        this.router.get("/obtenerProductos", obtenerProductos_1.default);
        this.router.post("/crearProducto", crearProducto_1.default);
        this.router.delete("/borrarProducto", borrarProducto_1.default);
        this.router.patch("/modificarProducto", modificarProducto_1.default);
    }
    get getRouter() {
        return this.router;
    }
}
;
exports.default = ProductosController;
