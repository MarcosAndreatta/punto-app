import React, { useEffect } from "react";
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

const Navbar: React.FC = () => {
    //Hooks calling section
    const dispatcher = useAppDispatch();
    const navBarState = useAppSelector((state) => { return state.navBar })
    useEffect(() => {
        // Effect for making the navbar translucent after scrolling
        // By using the window.onscroll event. For now, let it this way. 
        // Try to use a ref and put the navbar inside it, maybe it is better than manipulating directly the dom.
        let posicionPreviaScroll = window.pageYOffset;
        const navBar = document.getElementById("navBar")!;
        window.onscroll = () => {
            const posicionActualScroll = window.pageYOffset;
            if (posicionActualScroll > posicionPreviaScroll && posicionActualScroll > 26) {
                if (navBarState.visibility) { dispatcher(navBarActions.hacerInvisible()) }
                //navBar.classList.add(styles.invisible);
            }
            else {
                if (!navBarState.visibility) { dispatcher(navBarActions.hacerVisible()) }
                //navBar.classList.remove(styles.invisible);
            }
            posicionPreviaScroll = posicionActualScroll;
            // Change it in order to measure some element height, which should be related to the amount of content that is shown.
        };
        //</>
    }, [navBarState.visibility]);
    useEffect(() => {
        //Making the navbar opaque when opened
        const divQueSeColapsa = document.getElementById("navbarSupportedContent");
        divQueSeColapsa?.addEventListener("show.bs.collapse", () => {
            dispatcher(navBarActions.aplicarEstiloDeExpandida())
        });
        divQueSeColapsa?.addEventListener("hide.bs.collapse", () => {
            dispatcher(navBarActions.aplicarEstiloDeNoExpandida())
        });
        return () => { console.log("cleanup"); divQueSeColapsa?.removeEventListener("show.bs.collapse", () => { }); divQueSeColapsa?.removeEventListener("hide.bs.collapse", () => { }) }
    }, [navBarState["bg-dark"], navBarState["bg-white"]]);

    // This is to close the navbar after clicking in a link
    const cerrador = () => {
        const expandido = document.querySelector(".navbar-collapse");
        const navBar = document.getElementById("navBar")!;
        navBar.classList.remove("bg-white");
        navBar.classList.add("navbar-dark");
        expandido?.classList.remove("show")
    };

    return <React.Fragment>
        <nav id="navBar"
            style={{ transition: "all 0.7s" }}
            className={`
                fixed-top navbar navbar-expand-lg 
                ${navBarState["bg-white"] ? "bg-white" : ""} 
                ${navBarState["bg-dark"] ? "bg-dark" : ""} 
                ${navBarState["navbar-dark"] ? "navbar-dark" : ""}
                ${navBarState["navbar-translucida"] ? styles.navBar_translucida : ""}
                ${!navBarState.visibility ? styles.invisible : ""}
            `}>
            <div className="container-sm">
                <Image src={logoPunto} width={30} height={30} alt="Punto Papelería Educativathuna"></Image>
                <p className="navbar-brand mt-0 mr-0 mb-0 ms-1">Punto, Papelería Educativa</p>
                <button id="hamburguer-toggler" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li onClick={cerrador} className="nav-item pt-1 pe-1 pb-1">
                            <Link className="nav-link active p-1" passHref href="/">
                                <p className="m-0" aria-current="page">Home</p>
                            </Link>
                        </li>
                        <li onClick={cerrador} className="nav-item pt-1 pe-1 pb-1">
                            <Link className="nav-link p-1" passHref href="/productos">
                                <p className="m-0">Productos</p>
                            </Link>
                        </li>
                        <li onClick={cerrador} className="nav-item pt-1 pe-1 pb-1">
                            <Link className="nav-link p-1" passHref href="/promociones">
                                <p className="m-0">Promociones</p>
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu">
                                <div className="accordion m-0" id="accordionExample">
                                    {categorias.map((categoria, index) => { return <Categoria id={index} parentAccordinId="accordionExample" categoría={categoria} key={`a${index}`} /> })}

                                </div>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Disabled</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>

        </nav>
    </React.Fragment>
};
export default Navbar