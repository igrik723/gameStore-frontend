import React, {useState} from "react";
import { Button, Container } from "react-bootstrap";
import CreateType from "../components/modals/CreateType";
import CreatePublisher from "../components/modals/CreatePublisher";
import CreateGame from "../components/modals/CreateGame";

const Admin = () => {
    const [publisherVisible, setPublisherVisible] = useState(false) 
    const [typeVisible, setTypeVisible] = useState(false) 
    const [gameVisible, setGameVisible] = useState(false) 
    return ( 
        <Container className="d-flex flex-column">
            <Button
                variant="outline-secondary"
                className="mt-4 p-2"
                onClick={() => setTypeVisible(true)}
            >
                Добавить жанр
            </Button>
            <Button
                variant="outline-secondary"
                className="mt-4 p-2"
                onClick={() => setPublisherVisible(true)}
            >
                Добавить издателя
            </Button>
            <Button
                variant="outline-secondary"
                className="mt-4 p-2"
                onClick={() => setGameVisible(true)}
            >
                Добавить игру
            </Button>
            <CreatePublisher show={publisherVisible} onHide={() => setPublisherVisible(false)}/>
            <CreateGame show={gameVisible} onHide={() => setGameVisible(false)}/>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
        </Container>
     );
}
 
export default Admin;
