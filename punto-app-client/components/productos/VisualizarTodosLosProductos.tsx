import React, { useState } from "react";
import Image from "next/image";
import { Button, Container, Modal } from "react-bootstrap";
import { Responses } from "../../types";
import styles from "./VisualizarTodosLosProductos.module.css";
import ModalCustomized from "../UI/modal/Modal";


const TarjetaDeProducto: React.FC<{
    setShowModal: any;
    _id: string;
    nombre: string;
    imagenes: string[];
    descripcion: string;
    precio: number;
    stock: number;
    categoria: Responses.ObjectId
}> = (props) => {
    const [hovered, setHoverState] = useState<boolean>(false);

    return <div className={`${styles.li} ${hovered ? styles.hovered : ""} m-2 text-center`}
        onMouseEnter={() => { setHoverState(true) }}
        onTouchStart={() => { setHoverState(true) }}
        onMouseLeave={() => { setHoverState(false) }}
        onTouchEnd={() => { setHoverState(false) }}>
        <div className="card mt-3">
            <div style={{ "position": "relative", height: "200px" }}>
                <Image style={{ "borderRadius": "20px" }} fill src={props.imagenes[0]} alt=""></Image>
                <Image className={hovered ? styles.isHovered : styles.isNotHovered} src={props.imagenes[1]} alt="" fill></Image>
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.nombre}</h5>
                <p className="card-text">{props.precio}</p>
                <Button onClick={props.setShowModal} type="button">
                    Modificar
                </Button>
            </div>
        </div>
    </div>
};

const VisualizarTodosLosProductosHomePage_: React.FC<{
    categorias: Responses.Categoria;
    productos: Responses.Producto
}> = (props) => {
    const [showModal, setShowModal] = useState<boolean>(false);
    return <React.Fragment>
        <ModalCustomized showModalHandler={setShowModal} show={showModal} header="Modificar/Borrar producto">
            <p>I am the eraser</p>
        </ModalCustomized>
        <Container fluid="sm">
            {props.productos.datos.map((productoIndividual) => {
                return <TarjetaDeProducto
                    setShowModal={setShowModal}
                    key={productoIndividual._id}
                    _id={productoIndividual._id}
                    nombre={productoIndividual.nombre}
                    imagenes={productoIndividual.imagenes}
                    descripcion={productoIndividual.descripcion}
                    precio={productoIndividual.precio}
                    stock={productoIndividual.stock}
                    categoria={productoIndividual.categoria} />
            })}
        </Container>
    </React.Fragment>
}
export default VisualizarTodosLosProductosHomePage_