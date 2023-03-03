"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const categorias_1 = __importDefault(require("./controllers/categorias"));
const noEncontrado_1 = __importDefault(require("./controllers/noEncontrado"));
const productos_1 = __importDefault(require("./controllers/productos"));
const buscador_1 = __importDefault(require("./controllers/buscador"));
const server_1 = __importDefault(require("./server"));
const server = new server_1.default(8080);
const categoriasController = new categorias_1.default();
const productosController = new productos_1.default();
const buscadorController = new buscador_1.default();
server.addRoute("/categorias", categoriasController.getRouter);
server.addRoute("/productos", productosController.getRouter);
server.addRoute("/buscador", buscadorController.getRouter);
server.addCatchAllRoute(noEncontrado_1.default);
server.useErrorHandler();
