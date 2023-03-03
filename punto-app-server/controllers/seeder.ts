import mongoose, { ObjectId } from "mongoose";
import { Categoria, Producto } from "../models";
mongoose.connect("mongodb+srv://rey_xeneise:miramira@punto-app.ctg4ncb.mongodb.net/?retryWrites=true&w=majority");
const db = mongoose.connection;

const crearProducto = async () => {
    try {
        const producto = new Producto({
            nombre: "Cartuchera",
            imagenes: ["a", "b"],
            descripcion: "Prueba",
            precio: 200,
            stock: 2,
            categoria: "507f1f77bcf86cd799439011"
        });
        const saved = await producto.save();
        
        
    } catch (e) {console.log(e)}
}
const crearCategoria = async () => {
    try {
        const producto = await Producto.findOne();
        Categoria.insertMany([
            {
                nombre: "Kits",
                imagenes: ["a", "b"],
                productos: producto
            },
            {
                nombre: "Cartucheras",
                imagenes: ["a", "b"],
                productos: producto
            }
        ])
    } catch (e) {console.log(e)}
};

crearProducto()
crearCategoria()