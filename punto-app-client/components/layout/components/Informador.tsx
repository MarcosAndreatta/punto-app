import React, { useEffect, useRef } from "react";
import { Alert } from "react-bootstrap";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { useAppSelector, useAppDispatch } from "../../../logica/reduxStore/customizedHooks";
import { informadorActions } from "../../../logica/reduxStore/slices/interfazGrafica/informador";
import styles from "./Informador.module.css";
const Informador: React.FC = () => {
    const informadorState = useAppSelector((state) => { return state.informador });
    const dispatcher = useAppDispatch();
    const ref = useRef(null);

    const duration = 500;
    const defaultStyle = {
        transition: `opacity ${duration}ms linear`,
        opacity: 0
    };
    const transitionStyles = {
        entering: { opacity: 1 },
        entered: { opacity: 1 },
        exiting: { opacity: 0 },
        exited: { opacity: 0 },
    };
    useEffect(() => {
        if (!informadorState.esVisible) { return };

        setTimeout(() => {
            dispatcher(informadorActions.toggleVisibility({ visibilidad: false, mensaje: "" }))
        }, 2000);


    }, [informadorState.esVisible]);
    return <AnimatePresence>
        {informadorState.esVisible && (
            <Motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={styles.informador}>
                <Alert style={{ "marginBottom": 0 }} variant={informadorState.variante as string}>
                    {informadorState.mensaje}
                </Alert>
            </Motion.div>
        )}
    </AnimatePresence>
    // return <CSSTransition
    // mountOnEnter

    //     in={showState}
    //     nodeRef={ref}
    //     timeout={20000}
    //     classNames={{
    //         enter: styles["transition-enter"],
    //         enterActive: styles["transition-enter-active"],
    //         exit: styles["transition-exit"],
    //         exitActive: styles["transition-exit-active"],
    //     }}

    //     unmountOnExit
    //     >
    //     <div className={styles.informador}>
    //         <Alert style={{ "marginBottom": 0 }} variant="danger">
    //             I an here
    //         </Alert>
    //     </div>
    // </CSSTransition>
}
export default Informador