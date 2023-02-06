import React from "react";
import { useAppSelector } from "../../../logica/reduxStore/customizedHooks";
import styles from "./Backdrop.module.css"
const Backdrop: React.FC = () => {
    const backdropState = useAppSelector((state) => {return state.backDrop});
    const modalContents = (
        <div id={styles.backdrop} className={!backdropState.visible ? styles.invisible : ""}></div>
    );
    return modalContents
}
export default Backdrop