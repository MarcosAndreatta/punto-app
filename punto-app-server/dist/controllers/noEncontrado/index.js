"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AppError_1 = require("../../server/AppError");
const noEncontradoHandler = (req, res, next) => {
    next(new AppError_1.AppError(404, "Ruta no encontrada"));
};
exports.default = noEncontradoHandler;
