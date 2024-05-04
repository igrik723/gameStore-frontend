import React from "react";
import { Image } from "react-bootstrap";
import classes from './GameInfo.module.css'
import { useSelector } from "react-redux";

const GameInfo = ({ game }) => {
    
    const types = useSelector(state => state.game.types)
    const type = types.filter((type) => type.id === game.typeId)
    
    const publishers = useSelector(state => state.game.publishers)
    const publisher = publishers.filter((publisher) => publisher.id === game.publisherId)

    console.log(type[0].name)
    return ( 
        <div
            className={classes.container}
        >
            <h1
                className={classes.title}
            >
                {game.name}
            </h1>
            <div
                className={classes.gameWrapper}
            >
                <Image
                    className={classes.image}
                    src={process.env.REACT_APP_API_URL + game.gameImg}
                />
                <div>
                    <div
                        className={classes.gameInfo}
                    >
                        {game.info}
                    </div>
                    <div
                        className={classes.type}
                    >
                        Жанр: {type[0].name}
                    </div>
                    <div
                        className={classes.publisher}
                    >
                        Издатель: {publisher[0].name}
                    </div>
                </div> 
            </div>
            <div
                className={classes.code}
            >
                Ваш код: 123456789
            </div>
        </div>
     );
}
 
export default GameInfo;