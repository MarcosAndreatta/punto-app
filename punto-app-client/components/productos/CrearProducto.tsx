import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Responses } from "../../types";
const CrearProducto: React.FC<{ categorias: Responses.Categoria }> = (props) => {
    const [formState, setFormState] = useState<{
        nombre: string;
        descripcion: string;
        precio: number;
        stock: number;
        categoria: string
    }>({
        nombre: "",
        descripcion: "",
        categoria: "",
        precio: 0,
        stock: 0
    });
    const onChangeHandler = (event: any) => {
        setFormState((prevState) => {
            return { ...prevState, [event.target.name]: event.target.value}
        })
    };
    const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formState)
    };
    return (
        <Container fluid="sm">
            <div className="espaciador"></div>
            <h1>Formulario de carga de nuevo producto</h1>
            <Form onSubmit={onSubmitHandler} encType="multipart/form-data">
                <Form.Group id="inputNombre">
                    <Form.Label htmlFor="inputNombre">Nombre</Form.Label>
                    <Form.Control onChange={onChangeHandler} value={formState.nombre}  name="nombre" id="inputNombre" placeholder="Ingrese nombre" type="text">

                    </Form.Control>
                </Form.Group>
                <Form.Group id="inputDescripcion">
                    <Form.Label  htmlFor="inputDescripcion">Descripcion</Form.Label>
                    <Form.Control onChange={onChangeHandler} value={formState.descripcion} name="descripcion" id="inputDescripcion" placeholder="Ingrese descripcion" type="text">

                    </Form.Control>
                    </Form.Group>
                <Form.Group>
                    <p>Ingrese imagenes</p>
                    <Form.Control  name="fotos" id="fotos1" type="file">
                    
                    </Form.Control>
                    <Form.Control  name="fotos" id="fotos2" type="file">
                    
                    </Form.Control>
                
                </Form.Group>
                <Form.Group>
                    <Form.Label  htmlFor="inputPrecio">Precio</Form.Label>
                    <Form.Control onChange={onChangeHandler} value={formState.precio} name="precio" id="precio" type="number"></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="inputStock">Stock</Form.Label>
                    <Form.Control onChange={onChangeHandler} value={formState.stock} name="stock" id="stock" type="number"></Form.Control>
                </Form.Group>
                <Form.Group >
                {props.categorias.datos.map((categoria) => {return (
                    <div key={categoria._id} className="mb-3">
                        <Form.Check 
                            onChange={onChangeHandler} 
                            name="categoria" 
                            type="radio" 
                            id={categoria._id} 
                            checked={formState.categoria === categoria.nombre} 
                            value={categoria.nombre} 
                            label={categoria.nombre}/>
                    </div>
                )})} 
                </Form.Group>
                <Button type="submit" variant="primary">
                    Enviar
                </Button>
            </Form>
        </Container>
    )
};
export default CrearProducto