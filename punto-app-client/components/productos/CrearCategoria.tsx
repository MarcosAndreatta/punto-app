import axios from "axios";
import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
const CrearCategoria: React.FC = () => {
    const [fieldsState, setFieldsState] = useState<{categoria: string}>({categoria: ""});
    const [fileFieldsState, setFileFieldsState] = useState<{[key: string]: Blob[]}>({fotos: []});
    const onChangeHandler = (evento: any) => {
        if (evento.target.name === "fotos") {
            setFileFieldsState((prevState) => { return {...prevState, [evento.target.name]: evento.target.files}})            
        } else {
            setFieldsState((prevState) => {return {...prevState, [evento.target.name]: evento.target.value}})
        }
        
    };
    const onSubmitHandler = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        const formData = new FormData();
        for (let field in fieldsState) {
            formData.append(field, fieldsState[field as keyof typeof fieldsState])
        }
        for (let fieldName in fileFieldsState) {
            for (let i=0; fileFieldsState[fieldName].length > i; i++) {
                formData.append(fieldName, fileFieldsState[fieldName][i])
            }
        }
        axios.post(`${process.env.NEXT_PUBLIC_URL}/categorias/crearCategoria`, formData)
    };

    return <React.Fragment>
        <Container fluid="sm">
        <h1>Formulario de creacion de categoría</h1>
        <Form onSubmit={onSubmitHandler}>
            <Form.Group id="inputCategoria">
                <Form.Label htmlFor="inputCategoria">
                    <Form.Control onChange={onChangeHandler} value={fieldsState.categoria}  name="categoria" id="inputCategoria" placeholder="Ingrese categoría" type="text">

                    </Form.Control>
                </Form.Label>
            </Form.Group>
            <Form.Group>
                    <p>Ingrese imagenes</p>
                    <Form.Control onChange={onChangeHandler} multiple name="fotos" id="fotos" type="file" />
                </Form.Group>
                <Button type="submit" variant="primary">
                    Enviar
                </Button>
        </Form>
        </Container>
    </React.Fragment>
};
export default CrearCategoria