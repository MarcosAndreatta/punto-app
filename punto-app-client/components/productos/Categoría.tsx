import React from "react";
import { Entidades } from "../../types";
import { Accordion } from "react-bootstrap";
import { useAppSelector } from "../../logica/reduxStore/customizedHooks";
import styles from "./Categoria.module.css"
interface CategoriaProps {
    
    categoría: Entidades.categoria;
    id: number;
    parentAccordionId: any
}
const Categoria: React.FC<CategoriaProps> = (props) => {
    const navBarState = useAppSelector((state) => {return state.navBar});
    return <React.Fragment>
        {/* <Accordion.Item eventKey={props.eventKey}>
            <Accordion.Header>{props.categoría.nombre}</Accordion.Header>
            <Accordion.Body>
                <ul className="list-group">
                    {props.categoría.productos.map((producto) => { return (<li className="list-group-item">{producto.nombre}</li>) })}
                </ul>
            </Accordion.Body>
        </Accordion.Item> */}
        <div onClick={(e) =>{e.stopPropagation()}} className={`accordion-item ${navBarState.estaEnZonaOscura ? styles.oscuro : ""}`}>
            <h2 className={`accordion-header`} id={`heading${props.id}`}>
                <button className={`accordion-button ${navBarState.estaEnZonaOscura ? "bg-dark" : ""}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${props.id}`} aria-expanded="false" aria-controls={`collapse${props.id}`}>
                    {props.categoría.nombre}
                </button>
            </h2>
            <div id={`collapse${props.id}`} className="accordion-collapse collapse" aria-labelledby={`heading${props.id}`} data-bs-parent={`#${props.parentAccordionId}`}>
                <div className="accordion-body p-0">
                    <ul className="list-group">
                        <li className="list-group-item">
                            Ver todos los productos
                        </li>
                        {props.categoría.productos.map((producto) => {return (<li className="list-group-item">{producto.nombre}</li>)})}
                    </ul>
                </div>
            </div>
        </div>
    </React.Fragment>
}
export default Categoria