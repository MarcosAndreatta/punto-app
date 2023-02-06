"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const borrarCategoria_1 = __importDefault(require("./borrarCategoria"));
const crearCategoria_1 = __importDefault(require("./crearCategoria"));
const modificarCategoria_1 = __importDefault(require("./modificarCategoria"));
const obtenerCategorias_1 = __importDefault(require("./obtenerCategorias"));
class CategoriasController {
    constructor() {
        this.router = express_1.default.Router();
        this.router.get("/obtenerCategorias", obtenerCategorias_1.default);
        this.router.post("/crearCategoria", crearCategoria_1.default);
        this.router.delete("/borrarCategoria", borrarCategoria_1.default);
        this.router.patch("/modificarCategoria", modificarCategoria_1.default);
    }
    get getRouter() {
        return this.router;
    }
}
;
exports.default = CategoriasController;
