import { Request, Response, NextFunction } from "express";
import { Categoria } from "../../models";
import { ExpressTypes } from "../../types";
import { AppError } from "../../server/AppError";
const mostrarCategoriasHanler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const categorias = await Categoria.find();
        const response: ExpressTypes.Response.Producto = {
            datos: categorias,
            mensaje: "Categorias encontradas"
        };
        res.status(200).json(response)
    } catch (e) {next(new AppError(500, `Error al obtener categorias: ${e}`))}
};
export default mostrarCategoriasHanler