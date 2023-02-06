import { Request, Response, NextFunction } from "express";
import bucket from "../../config";
import streamifier from "streamifier"
import { Producto } from "../../models";
import { AppError } from "../../server/AppError";

const crearProductoHandler = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.files)
    console.log(req.body)
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
    
    const crearProducto = async () => {
        try {
            const { nombre, imagenes, descripcion, precio, stock, categoria } = req.body;
            const producto = new Producto({
                nombre,
                imagenes,
                descripcion,
                precio,
                stock,
                categoria
            });
            await producto.save();
            res.status(201).json({mensaje: "Producto creado"})
        } catch (e) { console.log(e) }
    };
};
export default crearProductoHandler