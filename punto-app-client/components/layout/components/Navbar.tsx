import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
//Store stuff
import { navBarActions } from "../../../logica/reduxStore/slices/interfazGrafica/navBar";
import { useAppDispatch, useAppSelector } from "../../../logica/reduxStore/customizedHooks";
//</>
import CategoriaItem from "../../productos/CategoriaItem";
import { categorias } from "../../../modelosPreliminares/preliminares";
import logoPunto from "../../../public/logoPunto.jpg";
import styles from "./Navbar.module.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Accordion, Button, Dropdown } from "react-bootstrap";
import useHttp from "../../../logica/customHooks/useHttp";


const Navbar_: React.FC = () => {
    //Hooks calling section
    // We trigger the changes in navbar aspect by using an state from a redux store. This is because different pages
    // can trigger different aspects of the navbar, so I considered this to be more useful if its put into a global state.
    const dispatcher = useAppDispatch();
    const navBarState = useAppSelector((state) => { return state.navBar })
    useEffect(() => {
        let posicionPreviaScroll = window.pageYOffset;
        window.onscroll = () => {
            const posicionActualScroll = window.pageYOffset;
            if (posicionActualScroll > posicionPreviaScroll && posicionActualScroll > 26) {
                if (navBarState.visibility) { dispatcher(navBarActions.hacerInvisible()) }
            }
            else {
                if (!navBarState.visibility) { dispatcher(navBarActions.hacerVisible()) }
            }
            posicionPreviaScroll = posicionActualScroll;
            // Change it in order to measure some element height, which should be related to the amount of content that is shown.
        };
        //</>
    }, [navBarState.visibility]);
    const get = useHttp();
    const navBarToggleManager = () => {
        if (navBarState.estaExpandida) { dispatcher(navBarActions.aplicarEstiloDeNoExpandida()) }
        else { dispatcher(navBarActions.aplicarEstiloDeExpandida()) }
    };
    const reindizarBuscadorHandler = () => {
        get("indizarBuscador", "http://localhost:8080/buscador/indizar")
    };


    return <React.Fragment>
        <Navbar
            collapseOnSelect
            onToggle={navBarToggleManager}

            style={{ "transition": "all 0.7s", "maxHeight": "100vh"}}
            fixed="top"
            expand="lg"
            {...navBarState["bg-white"] ? { bg: "white" } : {}}
            {...navBarState["bg-dark"] ? { bg: "dark" } : {}}
            {...navBarState["navbar-dark"] ? { variant: "dark" } : {}}
            className={`${navBarState["navbar-translucida"] && styles.navBar_translucida} ${!navBarState.visibility && styles.invisible}`}>
            <Container fluid="sm">
                <Image src={logoPunto} width={30} height={30} alt="Punto Papelería Educativathuna"></Image>
                <Navbar.Brand className="mt-0 mr-0 mb-0 ms-1" href="#home">Punto Papelería</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link legacyBehavior className="nav-link p-1" passHref href="/">
                            <Nav.Link>
                                Home
                            </Nav.Link>
                        </Link>
                        <Link legacyBehavior className="nav-link p-1" passHref href="/promociones">
                            <Nav.Link>
                                Promociones
                            </Nav.Link>
                        </Link>
                        {/* <Dropdown>
                            <Dropdown.Toggle variant="light" className="nav-link" id="administrador">
                                Menu administrador
                            </Dropdown.Toggle>
                            <Dropdown.Menu style={{"border": 0}} className="p-0">
                            <div className="accordion" id="administrador">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="categorias">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#categoriasBody" aria-expanded="false" aria-controls="categoriasBody">
                                            Categorias
                                        </button>
                                    </h2>
                                    <div id="categoriasBody" className="accordion-collapse collapse show" aria-labelledby="categorias" data-bs-parent="#administrador">
                                        <div className="accordion-body p-0 ps-4">
                                            <Link legacyBehavior className="nav-link p-1" passHref href="/categorias/crear">
                                                <Nav.Link>
                                                    Crear
                                                </Nav.Link>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="productos">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#productosBody" aria-expanded="false" aria-controls="productosBody">
                                            Productos
                                        </button>
                                    </h2>
                                    <div id="productosBody" className="accordion-collapse collapse" aria-labelledby="productos" data-bs-parent="#administrador">
                                        <div className="accordion-body p-0 ps-4">
                                            <Link legacyBehavior className="nav-link p-1" passHref href="/productos/crear">
                                                <Nav.Link>
                                                    Crear
                                                </Nav.Link>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Dropdown.Menu>
                        </Dropdown> */}

                        {/* <div className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">
                                Nuestros productos
                            </a>
                            <div style={{ "padding": 0, "border": 0, margin: 0 }} className="dropdown-menu">
                                <div className="accordion" id="productos">
                                    {categorias.map((categoria, index) => { return <Categoria id={index} parentAccordionId="productos" categoría={categoria} key={`a${index}`} /> })}
                                </div>
                            </div>
                        </div> */}
                        <Dropdown>
                            <Dropdown.Toggle as="a" className="nav-link ps-0" variant="light" id="dropdown-basic">
                                Menu administrador
                            </Dropdown.Toggle>
                            <Button onClick={reindizarBuscadorHandler} type="button" variant="light">
                                Re-Indizar buscador
                            </Button>

                            <Dropdown.Menu style={{ "padding": 0, "border": 0, margin: 0 }}>
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Productos</Accordion.Header>
                                        <Accordion.Body>
                                            <Link legacyBehavior passHref href="/productos/crear">
                                                <Nav.Link>
                                                    Crear
                                                </Nav.Link>
                                            </Link>
                                            <Link legacyBehavior passHref href="/productos/visualizar">
                                                <Nav.Link>
                                                    Ver todos los productos
                                                </Nav.Link>
                                            </Link>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Categorías</Accordion.Header>
                                        <Accordion.Body>
                                        <Link legacyBehavior passHref href="/categorias/crear">
                                                <Nav.Link>
                                                    Crear
                                                </Nav.Link>
                                            </Link>
                                            <Link legacyBehavior passHref href="/categorias/visualizar">
                                                <Nav.Link>
                                                    Ver todas las categorías
                                                </Nav.Link>
                                            </Link>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle as="a" className="nav-link ps-0" variant="light" id="dropdown-basic">
                                Nuestros productos
                            </Dropdown.Toggle>

                            <Dropdown.Menu style={{ "padding": 0, "border": 0, margin: 0 }}>
                                <Accordion>
                                    {categorias.map((categoria, index) => {
                                        return <CategoriaItem eventKey={index.toString()} categoria={categoria} key={`as${index}`}/>
                                    })}
                                </Accordion>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </React.Fragment>
};
export default Navbar_