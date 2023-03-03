
import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import { ExpressTypes } from "../types";
export class AppError extends Error {  
    constructor (public status: number, public message: string) {
        super(message);
    }
};
export const errorMiddleware: ErrorRequestHandler = (error: AppError, req: Request, res: Response, next: NextFunction) => {
    const response: ExpressTypes.Response.Error = {
        mensaje: error.message
    };
    return res.status(error.status).json(response)
};