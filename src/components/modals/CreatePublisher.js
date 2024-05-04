import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { createPublisher } from "../../http/gameAPI";

const CreatePublisher = ({ show, onHide }) => {
    const [value, setValue] = useState('')

    const addPublisher = () => {
        createPublisher({ name: value }).then(data => {
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
                    Добавить издателя
                </Modal.Title>
             </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={"Введите название издателя"}
                    />
                </Form>
            </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                    <Button variant="outline-success" onClick={addPublisher}>Добавить</Button>
            </Modal.Footer>
        </Modal>
     );
}
 
export default CreatePublisher;