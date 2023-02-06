import mongoose from "mongoose";
import { Models } from "../types";
import categoriaSchema from "./schemas/categoria";
import productoSchema from "./schemas/producto";

export const Categoria = mongoose.model<Models.Categoria>("Categoria", categoriaSchema);
export const Producto = mongoose.model<Models.Producto>("Producto", productoSchema)