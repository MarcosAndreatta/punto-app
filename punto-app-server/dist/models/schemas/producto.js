"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const productoSchema = new mongoose_1.Schema({
    nombre: {
        type: String,
        required: [true, "Se requiere un nombre"]
    },
    imagenes: {
        type: [String],
        required: [true, "Debe ingresarse imagenes"]
    },
    descripcion: {
        type: String,
        required: [true, "Debe ingresarse descripcion"]
    },
    precio: {
        type: Number,
        required: [true, "Se debe ingresar precio"]
    },
    stock: {
        type: Number,
        required: [true, "Se debe ingresar stock"]
    },
    categoria: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: [true, "Se debe ingresar categoria"],
        ref: "Categoria"
    }
});
exports.default = productoSchema;
