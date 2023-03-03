import { Request, Response, NextFunction } from "express";
import { Producto } from "../../models/index";
import { ExpressTypes } from "../../types"
import puntoProductosIndex from "../../crearProductosIndex";
import { AppError } from "../../server/AppError";

const indizarHandler = async (req: Request, res: Response, next: NextFunction) => {
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
        const productos = await Producto.find().populate("categoria", "nombre");
        productos.forEach((producto) => {
            const record = {
                objectID: producto._id,
                name: producto.nombre
            };
            puntoProductosIndex.saveObject(record).wait()
        });
        const encontrados = await puntoProductosIndex.search("hb");
        const response: ExpressTypes.Response.Producto = {
             datos: encontrados.hits,
             mensaje: "Encontrados"
         };
         res.status(200).json(response)
    } catch (e) {}
};
export default indizarHandler