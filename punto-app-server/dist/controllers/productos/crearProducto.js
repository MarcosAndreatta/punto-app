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
exports.nuevoProductoFotosHandler = exports.crearProductoHandler = void 0;
const models_1 = require("../../models");
const multer_1 = __importDefault(require("multer"));
const AppError_1 = require("../../server/AppError");
const googleCloudMulterCustomClass_1 = __importDefault(require("../../helpers/googleCloudMulterCustomClass"));
const multerMiddleware = (0, multer_1.default)({
    storage: new googleCloudMulterCustomClass_1.default()
});
const crearProductoHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombre, descripcion, categoriaId, precio, stock } = req.body;
        const filesArray = [];
        for (let i = 0; req.files.length > i; i++) {
            filesArray.push(req.files[i].filename);
        }
        const categoriaAsignada = yield models_1.Categoria.findById(categoriaId);
        const nuevoProducto = new models_1.Producto({
            nombre,
            imagenes: filesArray,
            descripcion,
            precio: parseFloat(precio),
            stock: parseFloat(stock),
            categoria: categoriaAsignada
        });
        const productoGuardado = yield nuevoProducto.save();
        const response = {
            mensaje: "Producto creado",
            datos: productoGuardado
        };
        res.status(200).json(response);
    }
    catch (e) {
        next(new AppError_1.AppError(500, `Error al guardar nuevo producto: ${e}`));
    }
});
exports.crearProductoHandler = crearProductoHandler;
exports.nuevoProductoFotosHandler = multerMiddleware.array("fotos");
