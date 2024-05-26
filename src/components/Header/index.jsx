import Button from "react-bootstrap/Button";
import * as Style from "./style";
import { MainTitle } from "../../styles/utils";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import FormVaga from "../FormVaga";

export default function Header() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Style.Header>
            <MainTitle>AjudaVagas</MainTitle>
            <Button 
                variant="info"
                title="Anunciar vaga no site"
                onClick={handleShow}
            >
                Anunciar vaga
            </Button>

            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Anuncio de Vaga</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormVaga />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
                    <Button variant="success" type="submit" form="formAnunciarVaga">Enviar</Button>
                </Modal.Footer>
            </Modal>
        </Style.Header>
    );
};