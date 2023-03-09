import axios from "axios";
import { InferGetStaticPropsType } from "next";
import React from "react";
import VisualizarTodosLosProductosHomePage_ from "../../../components/productos/VisualizarTodosLosProductos";
import {Responses} from "../../../types";
const VisualizarHomePage: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({categorias, productos}) => {
    return <VisualizarTodosLosProductosHomePage_ categorias={categorias} productos={productos}/>
}
export default VisualizarHomePage
export const getStaticProps = async () => {
    try {
        const productos = await axios.get<Responses.Producto>(`${process.env.NEXT_PUBLIC_URL}/productos/obtenerProductos`);
        const categorias = await axios.get<Responses.Categoria>(`${process.env.NEXT_PUBLIC_URL}/categorias/obtenerCategorias`);
        return {
            props: {
                productos: productos.data,
                categorias: categorias.data
            }
        }
    } catch (e) {console.log("From /productos/visualizar getStaticProps:", e)}
};