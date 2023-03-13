import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Entidades } from "../../../types";
interface EdicionDeProductosProps extends Entidades.Producto {
    categorias: Entidades.Categoria[]
};
interface formStateWithoutFileFieldState extends Entidades.Producto {
    //categoriaId: string;
}
const EdicionDeProductos: React.FC<EdicionDeProductosProps> = (props) => {
    const [editorImagesStateEsVisible, setEditorImagesStateVisibility] = useState<boolean>(false);
    const [formStateWithoutFileField, setFormWhitoutFileField] = useState<formStateWithoutFileFieldState>({
        nombre: props.nombre,
        __v: props.__v,
        descripcion: props.descripcion,
        categoria: props.categoria,
        precio: props.precio,
        stock: props.stock,
        _id: props._id,
        imagenes: props.imagenes
    });
    const [formFileFieldState, setFormFieldState] = useState<{
        [key: string]: Blob[]
    }>({ fotos: [] });
    const onChangeHandler = (event: any) => {
        if (event.target.name === "fotos") {
            setFormFieldState((prevState) => { return { ...prevState, [event.target.name]: event.target.files } })

        } else {
            // event.target.id = Object.id
            if (event.target.name === "categoria") {
                setFormWhitoutFileField((prevState) => {
                    const newState = { ...prevState, categoria: {...prevState.categoria, _id: event.target.id, nombre: event.target.value  } }
                    console.log(newState)
                    return newState
                })
            } else {
                setFormWhitoutFileField((prevState) => {
                    return { ...prevState, [event.target.name]: event.target.value }
                })
            }
            
        }
    };
    useEffect(() => {console.log(formStateWithoutFileField)}, []);
    const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => { 
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
        console.log(formData.forEach((key, formEntry) => {console.log(key, ":", formEntry)}))
     };
    return <Form onSubmit={onSubmitHandler} encType="multipart/form-data">
        <Form.Group id="inputNombre">
            <Form.Label htmlFor="inputNombre">Nombre</Form.Label>
            <Form.Control onChange={onChangeHandler} value={formStateWithoutFileField.nombre} name="nombre" id="inputNombre" placeholder="Ingrese nombre" type="text">

            </Form.Control>
        </Form.Group>
        <Form.Group id="inputDescripcion">
            <Form.Label htmlFor="inputDescripcion">Descripcion</Form.Label>
            <Form.Control onChange={onChangeHandler} value={formStateWithoutFileField.descripcion} name="descripcion" id="inputDescripcion" placeholder="Ingrese descripcion" type="text">

            </Form.Control>
        </Form.Group>
        <Form.Group>
            {!editorImagesStateEsVisible && <Form.Check onChange={() => { setEditorImagesStateVisibility(true) }} type="checkbox" id="editarImagenesSelector" label="¿Editar imágenes?" />}
            {editorImagesStateEsVisible && <React.Fragment>
                <p>Ingrese imagenes</p>
                <Form.Control onChange={onChangeHandler} multiple name="fotos" id="fotos" type="file" />
            </React.Fragment>}
        </Form.Group>
        <Form.Group>
            <Form.Label htmlFor="inputPrecio">Precio</Form.Label>
            <Form.Control onChange={onChangeHandler} value={formStateWithoutFileField.precio} name="precio" id="precio" type="number"></Form.Control>
        </Form.Group>
        <Form.Group>
            <Form.Label htmlFor="inputStock">Stock</Form.Label>
            <Form.Control onChange={onChangeHandler} value={formStateWithoutFileField.stock} name="stock" id="stock" type="number"></Form.Control>
        </Form.Group>
        <Form.Group >
            {props.categorias.map((categoria) => {
                return (
                    <div key={categoria._id} className="mb-3">
                        <Form.Check
                            onChange={onChangeHandler}
                            name="categoria"
                            type="radio"
                            defaultChecked={formStateWithoutFileField.categoria.nombre === categoria.nombre}
                            id={categoria._id}
                            value={categoria.nombre}
                            label={categoria.nombre} />
                    </div>
                )
            })}
        </Form.Group>
        <Button type="submit" variant="primary">
            Enviar
        </Button>
    </Form>
}
export default EdicionDeProductos