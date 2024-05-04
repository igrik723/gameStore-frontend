import React from "react";
import { Col, Card, Image } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { GAME_ROUTE } from "../../../utils/consts";
import { useSelector } from "react-redux";

const GameItem = ({ game }) => {
    const publishers = useSelector(state => state.game.publishers)
    const publisher = publishers.filter((publisher) => publisher.id === game.publisherId)

    const navigate = useNavigate()
    return (
        <Col md={12} className="mt-3" onClick={() => navigate(GAME_ROUTE + '/' + game.id)}>
                <div className="d-flex" style={{ cursor: 'pointer' }}>
                        <Image width={400} height={150} src={process.env.REACT_APP_API_URL + game.shopImg} />
                    <div>
                        <div style={{ marginLeft: '15px' }}>{game.name}</div>
                        <div style={{ marginLeft: '15px' }}>От {publisher[0].name}</div>
                    </div>
                </div>
            
        </Col>
    );
}
 
export default GameItem;