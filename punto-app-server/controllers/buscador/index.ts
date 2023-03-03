import express, { Router } from "express";
import indizarHandler from "./indizarBuscador";
class BuscadorController {
    router: Router;
    constructor () {
        this.router = express.Router();
        this.router.get("/indizar", indizarHandler)
    }
    get getRouter () {
        return this.router
    }
}
export default BuscadorController