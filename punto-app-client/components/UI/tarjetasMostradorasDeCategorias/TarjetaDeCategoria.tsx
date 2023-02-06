import React, { useState} from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./TarjetaDeCategoria.module.css";

interface TarjetaDeCategoriaProps {
    imagenes: [{
        url: StaticImageData;
        alt: string;
    },{
        url: StaticImageData;
        alt: string;
    }],
    nombreDeCategoria: string
}

const TarjetaDeCategoria: React.FC<TarjetaDeCategoriaProps> = (props) => {
    const [isHovered, setHoverState] = useState<boolean>(false);
    return (
        <div className={` mt-3 card ${styles.card} ${isHovered ? styles.boxShadow : ""} ${styles.tarjeta}`} 
            onTouchStart={() => {setHoverState(true)}} 
            onTouchEnd={() => {setHoverState(false)}} 
            onMouseEnter={() => {setHoverState(true)}} 
            onMouseLeave={() => {setHoverState(false)}}>
            <Image src={props.imagenes[0].url} alt={props.imagenes[0].alt} fill></Image>
            <Image className={isHovered ? styles.isHovered : styles.isNotHovered} src={props.imagenes[1].url} alt={props.imagenes[1].alt} fill></Image>
            <div className="card-body">
                <button type="button" className="btn btn-primary">{props.nombreDeCategoria}</button>
            </div>
        </div>
    )
    
    
    // const [image, setImage] = useState<{imageUrl: StaticImageData, imageAlt: string}>({imageUrl: props.imagenes[0].url, imageAlt: props.imagenes[0].alt});
    

    // return (
    //     <div className={`card ${styles.tarjeta}`}
    //     onMouseEnter={() => {setImage({imageUrl: props.imagenes[1].url, imageAlt: props.imagenes[1].alt})}}
    //     onMouseLeave={() => {setImage({imageUrl: props.imagenes[0].url, imageAlt: props.imagenes[0].alt})}}>
    //         <Image src={image.imageUrl} alt={image.imageAlt} fill></Image>
    //         <div className="card-body">
    //             <a href="#" className="btn btn-primary">Go somewhere</a>
    //         </div>
    //     </div>
    // )
};
export default TarjetaDeCategoria