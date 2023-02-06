import { Request, Response, NextFunction } from "express";
const borrarProductosHandler = (req: Request, res: Response, {/*next: NextFunction*/}) => {
    console.log("Ruta de borrar productos llamada")
};
export default borrarProductosHandler