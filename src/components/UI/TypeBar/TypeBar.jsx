import React from 'react' 
import { useDispatch, useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import { selectTypeAction } from '../../../store/action-creators/action-creators';

const TypeBar = () => {
    const game = useSelector(state => state.game)
    const dispatch = useDispatch()

    const activeType = (type) => {
        dispatch(selectTypeAction(type))
    }

    return ( 
        <ListGroup className="py-0">
            {game.types.map(type =>
                <ListGroup.Item
                    style={{cursor:'pointer'}}
                    active={game.selectedType && type.id === game.selectedType.id}
                    onClick={() => activeType(type)}
                    key={type.id}
                >
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
}
 
export default TypeBar
