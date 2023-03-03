import React from "react";
import Image from "next/image";
import logoPunto from "../../../public/logo_transparent_background.png";
import styles from "./Footer.module.css";
const PiePagina: React.FC = () => {
    return <section id={styles.footer}>
        <div id={styles.container} className="text-white container-sm">
            <div className="m-3" id={styles.logo}>
                <Image src={logoPunto} alt="Logo" width={200} height={200}/>
            </div>
            <div id={styles.contenedorDeAccesos}>
                <div id="miCuenta">
                    <p className="fs-2">Mi cuenta</p>
                    <p className="fs-6"> Mis datos</p>
                    <p className="fs-6"> Mis pedidos</p>
                </div>
                <div id="universoPunto">
                    <p className="fs-2">Universo Punto</p>
                    <p className="fs-6">Quienes somos</p>
                    <p className="fs-6">Contacto</p>
                </div>

            </div>
            <div id="redesSociales">
                <p className="fs-2">Seguinos en:</p>
            </div>
        </div>
    </section>
};
export default PiePagina