import { Response, NextFunction } from "express";
import { Categoria, Producto } from "../../models";
import multer from "multer";
import { AppError } from "../../server/AppError";
import MulterGoogleCloudStorage from "../../helpers/googleCloudMulterCustomClass";
import { ExpressTypes } from "../../types";
interface ProductosPostRequest extends Express.Request {
    body: {
        nombre: string;
        descripcion: string;
        categoria: string;
        categoriaId: string;
        precio: string;
        stock: string;
    }
}
const multerMiddleware = multer({
    storage: new MulterGoogleCloudStorage()
});

export const crearProductoHandler = async (req: ProductosPostRequest, res: Response, next: NextFunction) => {
    try {
        const { nombre, descripcion, categoriaId, precio, stock } = req.body;
        const filesArray = [];
        for (let i = 0; req.files!.length > i; i++) {
            filesArray.push(req.files![i as keyof typeof req.files].filename)
        }
        const categoriaAsignada = await Categoria.findById(categoriaId)
        const nuevoProducto = new Producto({
            nombre,
            imagenes: filesArray,
            descripcion,
            precio: parseFloat(precio),
            stock: parseFloat(stock),
            categoria: categoriaAsignada
        });
        const productoGuardado = await nuevoProducto.save();
        const response: ExpressTypes.Response.Categoria = {
            mensaje: "Producto creado",
            datos: productoGuardado
        };
        res.status(200).json(response)
    } catch (e) { next(new AppError(500, `Error al guardar nuevo producto: ${e}`)) }
};
export const nuevoProductoFotosHandler = multerMiddleware.array("fotos")
