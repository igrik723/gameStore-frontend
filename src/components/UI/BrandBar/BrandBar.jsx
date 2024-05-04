import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Card } from "react-bootstrap";
import { selectPublisherAction } from "../../../store/action-creators/action-creators";

const BrandBar = () => {
    const game = useSelector(state => state.game)
    const dispatch = useDispatch()

    const activePublisher = (publisher) => {
        dispatch(selectPublisherAction(publisher))
    }
    return (
        <div className="d-flex flex-wrap">
            
            {game.publishers.map(publisher => 
                <Card
                    style={{cursor:'pointer'}}
                    key={publisher.id}
                    className="p-3"
                    onClick={() => activePublisher(publisher)}
                    border={game.selectedPublisher && publisher.id === game.selectedPublisher.id ?'danger' : 'gray'}
                >
                    {publisher.name}
                </Card>
            )}
        </div>
    );
}
 
export default BrandBar
