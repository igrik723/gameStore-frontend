import React, { useEffect, useState } from "react";
import { Button, Dropdown, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createGame, fetchGames, fetchPublishers, fetchTypes } from "../../http/gameAPI";
import { addGameAction, addPublisherAction, addTypeAction } from "../../store/action-creators/action-creators";

const CreateGame = ({ show, onHide }) => {
    const game = useSelector(state => state.game)
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [shopImg, setShopImg] = useState(null)
    const [gameImg, setGameImg] = useState(null)
    const [type, setType] = useState({})
    const [publisher, setPublisher] = useState({})
    const [info, setInfo] = useState('')

     useEffect(() => {
        fetchTypes().then(data => dispatch(addTypeAction(data)))
        fetchPublishers().then(data => dispatch(addPublisherAction(data)))
        fetchGames().then(data => dispatch(addGameAction(data.rows)))
    }, [])
   
    const selectShopImg = e => {
        setShopImg(e.target.files[0])
    }

    const selectGameImg = e => {
        setGameImg(e.target.files[0])
    }

    const addGame = () => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('shopImg', shopImg);
        formData.append('gameImg', gameImg);
        formData.append('typeId', type.id);
        formData.append('publisherId', publisher.id);
        formData.append('info', info);

        createGame(formData).then(data => onHide())
   }

    
    return (
         <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить игру
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle variant="outline-secondary">{type.name || 'Выберите жанр'}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {game.types.map(type => 
                                <Dropdown.Item
                                    onClick={() => setType(type)}
                                    key={type.id}>
                                    {type.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle variant="outline-secondary">{publisher.name || 'Выберите издателя'}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {game.publishers.map(publisher => 
                                <Dropdown.Item
                                    onClick={() => setPublisher(publisher)}
                                    key={publisher.id}>
                                    {publisher.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="mt-3" 
                        placeholder="Введите название игры"
                    />
                    <Form.Control
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                        className="mt-3"
                        placeholder="Введите стоимость игры"
                        type="number"
                    />
                    <Form.Control
                        value={info}
                        onChange={e => setInfo(e.target.value)}
                        className="mt-3"
                        as="textarea"
                        rows={4}  
                        placeholder="Введите описание игры"
                    />
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="fileInput">Загрузите изображение для страницы магазины</Form.Label>
                        <Form.Control
                            type="file"
                            id="fileInput"
                            onChange={selectShopImg}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="fileInput">Загрузите изображение для страницы игры</Form.Label>
                        <Form.Control
                            type="file" id="fileInput"
                            onChange={selectGameImg}
                        />
                    </Form.Group>
                    <hr/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger"
                    onClick={onHide}
                >
                    Закрыть
                </Button>
                    <Button variant="outline-success" onClick={addGame}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
}
 
export default CreateGame;