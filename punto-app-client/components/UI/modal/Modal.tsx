import React from "react";
import { Button, Modal } from "react-bootstrap";
const ModalCustomized: React.FC<{
    children: JSX.Element;
    show: boolean;
    header: string;
    showModalHandler: any
}> = (props) => {
    return <Modal aria-labelledby="modal" show={props.show} centered>
        <Modal.Header>
            <Modal.Title id="modal">
                {props.header}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {props.children}
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={() => {props.showModalHandler((prevState: any) => {return !prevState})}}>
                Cerrar
            </Button>
        </Modal.Footer>
    </Modal>
};
export default ModalCustomized