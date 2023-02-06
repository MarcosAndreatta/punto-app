import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
//Store stuff
import { navBarActions } from "../../../logica/reduxStore/slices/interfazGrafica/navBar";
import { useAppDispatch, useAppSelector } from "../../../logica/reduxStore/customizedHooks";
//</>
import Categoria from "../../productos/Categoría";
import { categorias } from "../../../modelosPreliminares/preliminares";
import logoPunto from "../../../public/logoPunto.jpg";
import styles from "./Navbar.module.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Accordion } from "react-bootstrap";


const Navbar_: React.FC = () => {
    //Hooks calling section
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
    const navBarToggleManager = () => {

        if (navBarState.estaExpandida) { dispatcher(navBarActions.aplicarEstiloDeNoExpandida()) }
        else { dispatcher(navBarActions.aplicarEstiloDeExpandida()) }
    };




    return <React.Fragment>
        <Navbar
            collapseOnSelect
            onToggle={navBarToggleManager}

            style={{ "transition": "all 0.7s" }}
            fixed="top"
            expand="lg"
            {...navBarState["bg-white"] ? { bg: "white" } : {}}
            {...navBarState["bg-dark"] ? { bg: "dark" } : {}}
            {...navBarState["navbar-dark"] ? { variant: "dark"} : {}}
            className={`${navBarState["navbar-translucida"] && styles.navBar_translucida} ${!navBarState.visibility && styles.invisible}`}>
            <Container  fluid="sm">
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
                        <div className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">
                                Menu Administrador
                            </a>
                            <div style={{"padding": 0, "border": 0, margin: 0}} className="dropdown-menu">
                            <Link legacyBehavior className="nav-link p-1" passHref href="/productos/crear">
                            <Nav.Link>
                                Crear producto
                            </Nav.Link>
                        </Link> 
                            </div>
                        </div>
                        <div className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">
                                Nuestros productos
                            </a>
                            <div style={{"padding": 0, "border": 0, margin: 0}} className="dropdown-menu">
                                <div className="accordion" id="productos">

                                
                                    {categorias.map((categoria, index) => { return <Categoria id={index} parentAccordionId="productos" categoría={categoria} key={`a${index}`} /> })}
                                    </div>
                            </div>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </React.Fragment>
};
export default Navbar_