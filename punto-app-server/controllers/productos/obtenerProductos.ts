import { Request, Response, NextFunction, response } from "express";
import { Producto } from "../../models";
import { AppError } from "../../server/AppError";
import { ExpressTypes } from "../../types";
const obtenerProductosHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const productos = await Producto.find();
        const response: ExpressTypes.Response.Producto = {
            datos: productos,
            mensaje: "Productos encontrador"
        };
        res.status(200).json(response)
    } catch (e) {next(new AppError(500, `Error al obtener productos: ${e}`))}
};
export default obtenerProductosHandler