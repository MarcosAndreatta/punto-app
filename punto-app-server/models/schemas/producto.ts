import { Schema } from "mongoose";
const productoSchema = new Schema({
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
        type: Schema.Types.ObjectId,
        required: [true, "Se debe ingresar categoria"],
        ref: "Categoria"
    }
});
export default productoSchema