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
const index_1 = require("../../models/index");
const crearProductosIndex_1 = __importDefault(require("../../crearProductosIndex"));
const indizarHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // Producto.find((error, productos) => {
    //     if (error) { return next(new AppError(500, error.message)) }
    //     productos.forEach((producto) => {
    //         const record = {
    //             objectID: producto._id,
    //             name: producto.nombre
    //         };
    //         puntoProductosIndex.saveObject(record).wait()
    //     });
    //     puntoProductosIndex.search("Balas").then(({hits}) => {
    //         hits.forEach((hit) => {
    //             console.log(hit)
    //         });
    //     });
    // })
    //     .populate("categoria", "nombre")
    //     .exec()
    try {
        const productos = yield index_1.Producto.find().populate("categoria", "nombre");
        productos.forEach((producto) => {
            const record = {
                objectID: producto._id,
                name: producto.nombre
            };
            crearProductosIndex_1.default.saveObject(record).wait();
        });
        const encontrados = yield crearProductosIndex_1.default.search("hb");
        const response = {
            datos: encontrados.hits,
            mensaje: "Encontrados"
        };
        res.status(200).json(response);
    }
    catch (e) { }
});
exports.default = indizarHandler;
