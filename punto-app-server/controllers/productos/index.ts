import express, { Router } from "express";
import borrarProductosHandler from "./borrarProducto";
import crearProductoHandler from "./crearProducto";
import modificarProductosHandler from "./modificarProducto";
import obtenerProductosHandler from "./obtenerProductos";

class ProductosController {
    router: Router;
    constructor() {
        this.router = express.Router();
        this.router.get("/obtenerProductos", obtenerProductosHandler);
        this.router.post("/crearProducto", crearProductoHandler);
        this.router.delete("/borrarProducto", borrarProductosHandler);
        this.router.patch("/modificarProducto", modificarProductosHandler)
    }
    get getRouter () {
        return this.router
    }
};
export default ProductosController