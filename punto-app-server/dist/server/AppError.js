"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = exports.AppError = void 0;
class AppError extends Error {
    constructor(status, message) {
        super(message);
        this.status = status;
        this.message = message;
    }
}
exports.AppError = AppError;
;
const errorMiddleware = (error, req, res, next) => {
    const response = {
        mensaje: error.message
    };
    res.status(error.status).json(response);
};
exports.errorMiddleware = errorMiddleware;
