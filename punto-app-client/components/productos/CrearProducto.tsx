import axios from "axios";
import React, { FormEvent, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useAppDispatch, useAppSelector} from "../../logica/reduxStore/customizedHooks";
import { informadorActions } from "../../logica/reduxStore/slices/interfazGrafica/informador";
import { Responses } from "../../types";
const CrearProducto: React.FC<{ categorias: Responses.Categoria }> = (props) => {
    const informadorState = useAppSelector((state) => { return state.informador });
    const dispatcher = useAppDispatch();
    
    const [formStateWithoutFileField, setFormWhitoutFileField] = useState<{
        nombre: string;
        descripcion: string;
        precio: string;
        stock: string;
        categoria: string;
        categoriaId: string;
    }>({
        nombre: "",
        descripcion: "",
        categoria: "",
        categoriaId: "",
        precio: "0",
        stock: "0",
    });
    const [formFileFieldState, setFormFieldState] = useState<{
        [key: string]: Blob[]
    }>({fotos: []});
    const onChangeHandler = (event: any) => {
        if (event.target.name === "fotos") {
            setFormFieldState((prevState) => {return {...prevState, [event.target.name]: event.target.files}})
        
        } else {
            // event.target.id = Object.id
            if (event.target.name === "categoria") {
                setFormWhitoutFileField((prevState) => {
                    return {... prevState, categoriaId: event.target.id, categoria: event.target.value}
                })
            }
            setFormWhitoutFileField((prevState) => {           
                return { ...prevState, [event.target.name]: event.target.value}
            })
        }
        
    };
    const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData();
        for (let field in formStateWithoutFileField) {
            formData.append(field, formStateWithoutFileField[field as keyof typeof formStateWithoutFileField])
        }
        for (let fieldName in formFileFieldState) {
            for (let i=0; formFileFieldState[fieldName].length > i; i++) {
                formData.append(fieldName, formFileFieldState[fieldName][i])
            }
            
        }
        //formData.forEach((value, key) => {console.log(key, value)})
        axios.post(`${process.env.NEXT_PUBLIC_URL}/productos/crearProducto`, formData)
        
    };
    return (
        <Container fluid="sm">
            <div className="espaciador"></div>
            <h1>Formulario de carga de nuevo producto</h1>
            <Form onSubmit={onSubmitHandler} encType="multipart/form-data">
                <Form.Group id="inputNombre">
                    <Form.Label htmlFor="inputNombre">Nombre</Form.Label>
                    <Form.Control onChange={onChangeHandler} value={formStateWithoutFileField.nombre}  name="nombre" id="inputNombre" placeholder="Ingrese nombre" type="text">

                    </Form.Control>
                </Form.Group>
                <Form.Group id="inputDescripcion">
                    <Form.Label  htmlFor="inputDescripcion">Descripcion</Form.Label>
                    <Form.Control onChange={onChangeHandler} value={formStateWithoutFileField.descripcion} name="descripcion" id="inputDescripcion" placeholder="Ingrese descripcion" type="text">

                    </Form.Control>
                    </Form.Group>
                <Form.Group>
                    <p>Ingrese imagenes</p>
                    <Form.Control onChange={onChangeHandler} multiple name="fotos" id="fotos" type="file" />
                </Form.Group>
                <Form.Group>
                    <Form.Label  htmlFor="inputPrecio">Precio</Form.Label>
                    <Form.Control onChange={onChangeHandler} value={formStateWithoutFileField.precio} name="precio" id="precio" type="number"></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="inputStock">Stock</Form.Label>
                    <Form.Control onChange={onChangeHandler} value={formStateWithoutFileField.stock} name="stock" id="stock" type="number"></Form.Control>
                </Form.Group>
                <Form.Group >
                {props.categorias.datos.map((categoria) => {return (
                    <div key={categoria._id} className="mb-3">
                        <Form.Check 
                            onChange={onChangeHandler} 
                            name="categoria" 
                            type="radio" 
                            id={categoria._id} 
                            checked={formStateWithoutFileField.categoria === categoria.nombre} 
                            value={categoria.nombre} 
                            label={categoria.nombre}/>
                    </div>
                )})} 
                </Form.Group>
                <Button type="submit" variant="primary">
                    Enviar
                </Button>
            </Form>
            <Button onClick={() => {dispatcher(informadorActions.informarFueExitoso({variante: "info", mensaje: "Prueba", visibilidad: true}))}} type="button" variant="primary">
                    Prueba
            </Button>
        </Container>
    )
};
export default CrearProducto