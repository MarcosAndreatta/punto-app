"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const categoriaSchema = new mongoose_1.Schema({
    nombre: {
        type: String,
        required: [true, "Se debe ingresar nombre"]
    },
    imagenes: {
        type: [String],
        required: [true, "Se debe ingresar imagenes"]
    },
    productos: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Producto"
        }
    ]
});
exports.default = categoriaSchema;
