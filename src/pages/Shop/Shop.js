import React, { useEffect, useState } from "react";
import {Button, Image} from "react-bootstrap";
import { Container } from "react-bootstrap";
import TypeBar from "../../components/UI/TypeBar/TypeBar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BrandBar from "../../components/UI/BrandBar/BrandBar";
import GameList from "../../components/UI/GameList/GameList";
import markImage from '../../assets/mark.png'
import { useDispatch, useSelector } from "react-redux";
import { fetchGames, fetchTypes, fetchPublishers } from "../../http/gameAPI";
import { addTypeAction, addPublisherAction, addGameAction, selectTypeAction, selectPublisherAction } from "../../store/action-creators/action-creators";
import classes from "./Shop.module.css"

const Shop = () => {
    const dispatch = useDispatch()
    const [searchName, setSearchName] = useState('')
    const game = useSelector(state => state.game)
    

    const filteredGames = game.games.filter(game => {
        return game.name.toLowerCase().includes(searchName.toLowerCase())
    })
    
    const cleanFilter = () => {
        dispatch(selectTypeAction({}))
        dispatch(selectPublisherAction({}))
    }

    useEffect(() => {
        fetchTypes().then(data => dispatch(addTypeAction(data)))
        fetchPublishers().then(data => dispatch(addPublisherAction(data)))
        fetchGames().then(data => dispatch(addGameAction(data.rows)))
    }, [])

    useEffect(() => {
            fetchGames(game.selectedType.id, game.selectedPublisher.id).then(data => dispatch(addGameAction(data.rows)))
    }, [game.selectedType, game.selectedPublisher])


    return ( 
        <Container className={classes.container}>
            <Row className="mt-2">
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={8}>
                    <BrandBar />
                    <GameList
                        filteredGames={filteredGames}
                    />
                </Col>
                <Col md={1}>
                    <div
                        className={classes.inputContainer}
                    >
                        <input
                            className={classes.input}
                            placeholder="Поиск по названию"
                            value={searchName}
                            onChange={e => setSearchName(e.target.value)}
                        />
                        <Image
                            src={markImage}
                            className={classes.mark}
                            onClick={() => setSearchName('')}
                        />
                    </div>
                    <Button
                        className={classes.inputBtn}
                        variant="outline-secondary"
                        onClick={cleanFilter}
                    >
                        Очистить фильтры
                    </Button>
                </Col>
            </Row>
        </Container>
     );
}
 
export default Shop;