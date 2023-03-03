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
exports.nuevaCategoriaFotosHandler = exports.crearCategoriaHanler = void 0;
const multer_1 = __importDefault(require("multer"));
const googleCloudMulterCustomClass_1 = __importDefault(require("../../helpers/googleCloudMulterCustomClass"));
const models_1 = require("../../models");
const AppError_1 = require("../../server/AppError");
const multerMiddleware = (0, multer_1.default)({
    storage: new googleCloudMulterCustomClass_1.default()
});
const crearCategoriaHanler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const filesArray = [];
        for (let i = 0; req.files.length > i; i++) {
            filesArray.push(req.files[i].filename);
        }
        const nuevaCategoria = new models_1.Categoria({
            nombre: req.body.categoria,
            imagenes: filesArray,
            productos: null
        });
        const categoriaGuardada = yield nuevaCategoria.save();
        const response = {
            datos: categoriaGuardada,
            mensaje: "Categoria creada"
        };
        res.status(200).send(response);
        console.log(response);
    }
    catch (e) {
        next(new AppError_1.AppError(500, `Error al crear categoria: ${e}`));
    }
});
exports.crearCategoriaHanler = crearCategoriaHanler;
exports.nuevaCategoriaFotosHandler = multerMiddleware.array("fotos");
