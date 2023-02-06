import express, { Router } from "express";
import borrarCategoriaHandler from "./borrarCategoria";
import crearCategoriaHanler from "./crearCategoria";
import modificarCategoriaHandler from "./modificarCategoria";
import mostrarCategoriasHanler from "./obtenerCategorias";
class CategoriasController {
    router: Router;
    constructor() {
        this.router = express.Router();
        this.router.get("/obtenerCategorias", mostrarCategoriasHanler);
        this.router.post("/crearCategoria", crearCategoriaHanler);
        this.router.delete("/borrarCategoria", borrarCategoriaHandler);
        this.router.patch("/modificarCategoria", modificarCategoriaHandler)
    }
    get getRouter () {
        return this.router
    }
};
export default CategoriasController