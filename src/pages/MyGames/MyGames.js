import React from "react"
import { useState } from "react";
import { Image } from "react-bootstrap";
import glassImage from '../../assets/glass.png'
import markImage from '../../assets/mark.png'
import classes from './MyGames.module.css'
import { useEffect } from "react";
import { check, fetchUserInfo } from "../../http/userAPI";
import { fetchOneGame } from "../../http/gameAPI";
import { useNavigate } from "react-router-dom";
import { SHOP_ROUTE } from "../../utils/consts";
import { Nav } from "react-bootstrap";
import GameInfo from "../../components/UI/GameInfo/GameInfo";

const MyGames = () => {
    const [searchName, setSearchName] = useState('')
    const [userId, setUserId] = useState('')
    const [userGames, setUserGames] = useState([])
    const [selectedGame, setSelectedGame] = useState(null)

    const navigate = useNavigate()

    useEffect(() => {
        check().then(data => {
            setUserId(data.id)
        })
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            const userData = await fetchUserInfo(userId);
            if (userData && userData.games) {
                const games = await Promise.all(userData.games.map(gameId => fetchOneGame(gameId)))
                setUserGames(games)
            }
        }
        if (userId) {
            fetchData()
        }
    }, [userId])


    const filteredGames = userGames.filter(game => {
        return game.name.toLowerCase().includes(searchName.toLowerCase())
    })

    return ( 
        <div>
            <div className={classes.container}>
                <div
                    className={classes.formWrapper}
                >
                    <div
                        className={classes.form}
                    >
                        <Image src={glassImage} className={classes.glassImage} />
                        <input
                            placeholder="Поиск по названию"
                            className={classes.input}
                            value={searchName}
                            onChange={e => setSearchName(e.target.value)}
                        />
                        <Image
                            src={markImage}
                            className={classes.markImage}
                            onClick={() => setSearchName('')}
                        />
                        <div className={classes.gorSeparator}></div>
                        {
                            filteredGames.length === 0 ?
                                (
                                    <div className={classes.linkWrapper}>
                                        <div>Не нашли то, что икали?</div>
                                        <Nav.Link
                                            className={classes.link}
                                            onClick={() => navigate(SHOP_ROUTE)}>
                                            Поищите в нашем магазине
                                        </Nav.Link>
                                    </div>
                                ) :
                                (
                                    filteredGames.map((game, index) => (
                                        <div
                                            className={`${classes.list} ${selectedGame === game ? classes.selectedGame: ''}`}
                                            key={index}
                                            onClick={() => setSelectedGame(game)}
                                        >
                                            {game.name}
                                        </div>
                                    ))
                                )
                        }
                    </div>
                </div>
                <div className={classes.virtSeparator}></div>
                {selectedGame && <GameInfo game={selectedGame}/>}
            </div>
        </div>
     );
}
 
export default MyGames;