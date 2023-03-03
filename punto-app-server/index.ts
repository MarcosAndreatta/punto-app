import CategoriasController from "./controllers/categorias";
import noEncontradoHandler from "./controllers/noEncontrado";
import ProductosController from "./controllers/productos";
import BuscadorController from "./controllers/buscador";
import Server from "./server";
const server = new Server(8080);
const categoriasController = new CategoriasController();
const productosController = new ProductosController()
const buscadorController = new BuscadorController();

server.addRoute("/categorias", categoriasController.getRouter);
server.addRoute("/productos", productosController.getRouter);
server.addRoute("/buscador", buscadorController.getRouter)
server.addCatchAllRoute(noEncontradoHandler)
server.useErrorHandler()