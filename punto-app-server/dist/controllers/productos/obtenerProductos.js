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
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../models");
const AppError_1 = require("../../server/AppError");
const obtenerProductosHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productos = yield models_1.Producto.find().populate("categoria");
        const response = {
            datos: productos,
            mensaje: "Productos encontrados"
        };
        res.status(200).json(response);
    }
    catch (e) {
        next(new AppError_1.AppError(500, `Error al obtener productos: ${e}`));
    }
});
exports.default = obtenerProductosHandler;
