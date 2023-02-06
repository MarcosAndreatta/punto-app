import CategoriasController from "./controllers/categorias";
import noEncontradoHandler from "./controllers/noEncontrado";
import ProductosController from "./controllers/productos";
import Server from "./server";
const server = new Server(8080);
const categoriasController = new CategoriasController();
const productosController = new ProductosController()

server.addRoute("/categorias", categoriasController.getRouter);
server.addRoute("/productos", productosController.getRouter)
server.addCatchAllRoute(noEncontradoHandler)
server.useErrorHandler()