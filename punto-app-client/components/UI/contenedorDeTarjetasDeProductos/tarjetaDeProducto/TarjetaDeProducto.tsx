import Image, { StaticImageData } from "next/image";
import React, {useState} from "react";
import styles from "./TarjetaDeProducto.module.css";
interface TarjetaDeProductoProps {
    imagenes: StaticImageData[];
    nombre: string;
    precio: number;
}
const TarjetaDeProducto: React.FC<TarjetaDeProductoProps> = (props) => {
    const [hovered, setHoverState] = useState<boolean>(false);

    return <div className={`${styles.li} ${hovered ? styles.hovered : ""} m-2 text-center`} 
                onMouseEnter={() => {setHoverState(true)}} 
                onTouchStart={() => {setHoverState(true)}}
                onMouseLeave={() => {setHoverState(false)}}
                onTouchEnd={() => {setHoverState(false)}}>
        <div className="card">
            <div style={{"position": "relative", height: "200px"}}>
            <Image style={{"borderRadius": "20px"}} fill src={props.imagenes[0]} alt=""></Image>
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.nombre}</h5>
                <p className="card-text">{props.precio}</p>
                <button type="button" className=" btn btn-primary">Agregar al carro</button>
            </div>
        </div>
    </div>
};
export default TarjetaDeProducto