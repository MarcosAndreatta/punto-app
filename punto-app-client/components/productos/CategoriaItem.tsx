import Link from "next/link";
import React from "react";
import { Accordion, Nav } from "react-bootstrap";
import { Entidades } from "../../types";
const CategoriaItem: React.FC<{
    eventKey: string;
    categoria: Entidades.Categoria;
}> = (props) => {
    return <Accordion.Item eventKey={props.eventKey}>
        <Accordion.Header>{props.categoria.nombre}</Accordion.Header>
        <Accordion.Body>
            <li className="list-group-item">
                <Link legacyBehavior passHref href="#">
                    <Nav.Link>
                        Ver todos los productos
                    </Nav.Link>
                </Link>
            </li>
            {props.categoria.productos.map((producto) => {
                return <li className="list-group-item" key={`a${producto.nombre}`}>
                    <Link legacyBehavior passHref href={producto.nombre}>
                        <Nav.Link>
                        {producto.nombre}
                        </Nav.Link>
                    </Link>
                    
                </li>
            })}
        </Accordion.Body>
    </Accordion.Item>
};
export default CategoriaItem