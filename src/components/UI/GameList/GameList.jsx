import React from "react";
import { Row } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import GameItem from "../GameItem/GameItem";

const GameList = ({filteredGames}) => {
    const game = useSelector(state => state.game)
    const dispatch = useDispatch()

    return (
        <Row className="d-flex">
            {filteredGames ? 
                filteredGames.map(game => 
                    <GameItem key={game.id} game={game}/>    
                )
            :
                
                game.games.map(game =>
                    <GameItem key={game.id} game={game} />
                )
                
            }
        </Row>
    );
}
 
export default GameList;