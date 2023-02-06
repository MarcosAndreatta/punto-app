"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const models_1 = require("../models");
mongoose_1.default.connect("mongodb://127.0.0.1:27017/puntoApp");
const db = mongoose_1.default.connection;
const crearProducto = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const producto = new models_1.Producto({
            nombre: "Cartuchera",
            imagenes: ["a", "b"],
            descripcion: "Prueba",
            precio: 200,
            stock: 2,
            categoria: "507f1f77bcf86cd799439011"
        });
        const saved = yield producto.save();
    }
    catch (e) {
        console.log(e);
    }
});
const crearCategoria = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const producto = yield models_1.Producto.findOne();
        models_1.Categoria.insertMany([
            {
                nombre: "Kits",
                imagenes: ["a", "b"],
                productos: producto
            },
            {
                nombre: "Cartucheras",
                imagenes: ["a", "b"],
                productos: producto
            }
        ]);
    }
    catch (e) {
        console.log(e);
    }
});
crearProducto();
crearCategoria();
