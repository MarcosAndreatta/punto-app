import { Schema } from "mongoose";
const categoriaSchema = new Schema({
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
            type: Schema.Types.ObjectId,
            ref: "Producto"
        }
    ]
});
export default categoriaSchema