import React from "react";
import TarjetaDeProducto from "./tarjetaDeProducto/TarjetaDeProducto";
import styles from "./ContenedorDeTarjetasDeProductos.module.css";
import sorte from "./sorteo.jpg";
const contenedorDeTarjetasDeProductos: React.FC = () => {
    return (
        <div className={`${styles.ul} p-0`}>
            <TarjetaDeProducto imagenes={[sorte]} nombre="Sorteo" precio={200}></TarjetaDeProducto>
            <TarjetaDeProducto imagenes={[sorte]} nombre="Sorteo" precio={200}></TarjetaDeProducto>
            <TarjetaDeProducto imagenes={[sorte]} nombre="Sorteo" precio={200}></TarjetaDeProducto>
            <TarjetaDeProducto imagenes={[sorte]} nombre="Sorteo" precio={200}></TarjetaDeProducto>
        </div>
    )
};
export default contenedorDeTarjetasDeProductos