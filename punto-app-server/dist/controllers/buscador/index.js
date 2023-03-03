"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indizarBuscador_1 = __importDefault(require("./indizarBuscador"));
class BuscadorController {
    constructor() {
        this.router = express_1.default.Router();
        this.router.get("/indizar", indizarBuscador_1.default);
    }
    get getRouter() {
        return this.router;
    }
}
exports.default = BuscadorController;
