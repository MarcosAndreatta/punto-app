import React, { useEffect} from "react";
import { useAppDispatch, useAppSelector } from "../../logica/reduxStore/customizedHooks";
import { navBarActions } from "../../logica/reduxStore/slices/interfazGrafica/navBar";
import styles from "./ProductosDeCategoria.module.css";
import { Leckerli_One } from "@next/font/google";
import Image, { StaticImageData } from "next/image";
interface ProductosProps {
    nombre: string;
    imagen: StaticImageData
}

const fuente = Leckerli_One({
    weight: ["400"],
    subsets: ["latin"]
});
const Productos: React.FC<ProductosProps> = (props) => {
    const dispatcher = useAppDispatch();
    const navBarState = useAppSelector((state) => { return state.navBar });
    useEffect(() => {
        dispatcher(navBarActions.indicarQueEstaEnZonaOscura());
        dispatcher(navBarActions.aplicarEstiloDeNoExpandida());
    }, []);
    // const [isOpened, setOpenStatus] = useState<boolean>(false);
    // const offCanvasHandler = () => {
    //     setOpenStatus((e) => { return !e });
    // };
    return <React.Fragment>
        <div className="espaciador"></div>
        <div style={{"position": "relative", "height": "200px", "display": "flex", "justifyContent": "center", "alignItems": "center"}}>
        <Image style={{"zIndex": -1}} src={props.imagen} alt="" fill />
        <h1 className="text-white">{props.nombre}</h1>
        </div>
        {/* <div className={`${styles.nuestrosProductos} ${!navBarState.visibility ? styles.top0 : ""}`}>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-sm">
                    <button type="button" className="navbar-toggler" onClick={offCanvasHandler}><span className="navbar-toggler-icon"></span></button>
                    <a className="navbar-brand text-end m-0" href="#">
                        Nuestros productos
                    </a>

                </div>

            </nav>
            <div onClick={() => {setOpenStatus((e) => {return !e})}} className={`${styles.offCanvasContainer} ${isOpened ? styles.opened : styles.closed}`}>
                <div id="mySidenav" className={`${styles.sidenav}`}>
                <h5 className={`offcanvas-title pb-2 ${fuente.className} ${styles.punto}`} id="offcanvasWithBothOptionsLabel">Punto Papelería</h5>
                        
                    <div className="accordion m-0" id="accordionExample">
                        {categorias.map((categoria, index) => {return <Categoria id={index} parentAccordinId="accordionExample" categoría={categoria}/>})}
                        
                    </div>
                </div>
            </div>
        </div> */}

        <div style={{ "height": "800px" }} className="container-sm">

        </div>
    </React.Fragment>
}
export default Productos