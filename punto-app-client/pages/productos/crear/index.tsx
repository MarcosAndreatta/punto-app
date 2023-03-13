import { InferGetStaticPropsType } from "next";
import React from "react";
import CrearProducto from "../../../components/productos/CrearProducto";
import { Responses } from "../../../types";
const CrearProducto_: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({categorias}) => {
return <CrearProducto categorias={categorias}/>
};
export default CrearProducto_
export async function getStaticProps () {
    
    try {
        const preliminaryData = await fetch(`${process.env.NEXT_PUBLIC_URL}/categorias/obtenerCategorias`);
        if (!preliminaryData.ok) {throw new Error("Error getting response")};
        const response: Responses.Categorias = await preliminaryData.json();
        return {
            props: {
                categorias: response
            },
            revalidate: 30
        }
    } catch (e) {console.log(e)}
    
}