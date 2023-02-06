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
const crearProductoHandler = (req, res, next) => {
    console.log(req.files);
    console.log(req.body);
    // const subirArchivos = async (files: typeof req.files) => {
    //     return new Promise ((resolve, reject) => {
    //         for (let i=0; i < files!.length; i++) {
    //             const blob = bucket.file(files![i].originalname as string);
    //             console.log(blob)
    //             const blobStream = blob.createWriteStream()
    //             streamifier.createReadStream(files[i].buffer)
    //             .pipe(blobStream)
    //             .on("finish", (respuesta) => {
    //                 archivosSubidos.push(respuesta)
    //             })
    //             .on("error", (error) => {reject(error)})
    //             if (archivosSubidos.length === req.files?.length) {resolve(archivosSubidos)}
    //         }
    //     })
    // }
    // subirArchivos(req.files)
    // .then((value) => {
    // }).catch((error) => {console.log(error)})
    const crearProducto = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { nombre, imagenes, descripcion, precio, stock, categoria } = req.body;
            const producto = new models_1.Producto({
                nombre,
                imagenes,
                descripcion,
                precio,
                stock,
                categoria
            });
            yield producto.save();
            res.status(201).json({ mensaje: "Producto creado" });
        }
        catch (e) {
            console.log(e);
        }
    });
};
exports.default = crearProductoHandler;
