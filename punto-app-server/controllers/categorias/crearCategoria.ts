import { Response, NextFunction } from "express";
import multer from "multer";
import MulterGoogleCloudStorage from "../../helpers/googleCloudMulterCustomClass";
import { Categoria } from "../../models";
import { AppError } from "../../server/AppError";
import { ExpressTypes } from "../../types";
interface CrearCategoriaRequest extends Express.Request {
    body: {categoria: string}
}
const multerMiddleware = multer({
    storage: new MulterGoogleCloudStorage()
});
export const crearCategoriaHanler = async (req: CrearCategoriaRequest, res: Response, next: NextFunction) => {
    try {
        const filesArray = [];
        for (let i = 0; req.files!.length > i; i++) {
            filesArray.push(req.files![i as keyof typeof req.files].filename)
        }
        const nuevaCategoria = new Categoria({
            nombre: req.body.categoria,
            imagenes: filesArray,
            productos: null
        })
        const categoriaGuardada = await nuevaCategoria.save();
        const response: ExpressTypes.Response.Categoria = {
            datos: categoriaGuardada,
            mensaje: "Categoria creada"
        };
        res.status(200).send(response);
        console.log(response)
    } catch (e) {next(new AppError(500, `Error al crear categoria: ${e}`))}
};
export const nuevaCategoriaFotosHandler = multerMiddleware.array("fotos");