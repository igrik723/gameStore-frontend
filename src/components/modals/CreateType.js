import React from "react"
import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { createType } from "../../http/gameAPI";

const CreateType = ({ show, onHide }) => {

    const [value, setValue] = useState('')
    
    const addType = () => {
        createType({ name: value }).then(data => {
            setValue('')
            onHide()
        })
    }

    return ( 
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить жанр
                </Modal.Title>
             </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={"Введите названте жанра"}
                    />
                </Form>
            </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                    <Button variant="outline-success" onClick={addType}>Добавить</Button>
            </Modal.Footer>
        </Modal>
     );
}
 
export default CreateType;