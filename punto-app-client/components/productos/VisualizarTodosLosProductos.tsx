import React, { useState } from "react";
import Image from "next/image";
import { Button, Container, Modal } from "react-bootstrap";
import { Responses, Entidades } from "../../types";
import styles from "./VisualizarTodosLosProductos.module.css";
import ModalCustomized from "../UI/modal/Modal";
import EdicionDeProductos from "../UI/edicionDeElementos/edicionDeProductos";
interface modificadorState extends Entidades.Producto {};
interface TarjetaDeProductoProps extends Entidades.Producto {
    setModalVisibility: React.Dispatch<React.SetStateAction<boolean>>;
    setModificadorDeProductosState: React.Dispatch<React.SetStateAction<modificadorState>>
};

const TarjetaDeProducto: React.FC<TarjetaDeProductoProps> = (props) => {
    const [hovered, setHoverState] = useState<boolean>(false);
    const onModificarBotonHandler = () => {
        props.setModalVisibility(true);
        props.setModificadorDeProductosState({
            __v: props.__v,
            nombre: props.nombre,
            _id: props._id,
            descripcion: props.descripcion,
            imagenes: props.imagenes,
            categoria: props.categoria,
            precio: props.precio,
            stock: props.stock
        });
    };
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
                <p className="card-text">Precio: $<b>{props.precio}</b></p>
                <p className="card-text">Stock: <b>{props.precio} </b></p>
                <Button onClick={onModificarBotonHandler} type="button">
                    Modificar
                </Button>
            </div>
        </div>
    </div>
};

const VisualizarTodosLosProductosHomePage_: React.FC<{
    categorias: Responses.Categorias;
    productos: Responses.Productos
}> = (props) => {
    const [isModalVisible, setModalVisibility] = useState<boolean>(false);
    const [modificadorState, setModificadorState] = useState<modificadorState>({     
        nombre: "",
        descripcion: "",
        imagenes: [""],
        _id: "",
        categoria: {
            _id: "",
            nombre: "",
            imagenes: [""],
            productos: [""],
            __v: 0
        },
        precio: 0,
        stock: 0,
        __v: 0
    });
    return <React.Fragment>
        <ModalCustomized showModalHandler={setModalVisibility} show={isModalVisible} header="Modificar/Borrar producto">
            <EdicionDeProductos
                categorias={props.categorias.datos}
                __v={modificadorState.__v}
                nombre={modificadorState.nombre}
                _id={modificadorState._id}
                imagenes={modificadorState.imagenes}
                descripcion={modificadorState.descripcion}
                precio={modificadorState.precio}
                stock={modificadorState.stock}
                categoria={modificadorState.categoria} />
        </ModalCustomized>
        <div className="espaciador"></div>
        <Container as="ul" className={styles.ul} fluid="sm">
            {props.productos.datos.map((productoIndividual) => {
                return <TarjetaDeProducto
                    setModificadorDeProductosState={setModificadorState}
                    setModalVisibility={setModalVisibility}
                    __v={productoIndividual.__v}
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