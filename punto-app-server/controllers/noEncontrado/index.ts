import { Request, Response, NextFunction } from "express";
import { AppError } from "../../server/AppError";
const noEncontradoHandler = (req: Request, res: Response, next: NextFunction) => {
    next(new AppError(404, "Ruta no encontrada"))
}
export default noEncontradoHandler