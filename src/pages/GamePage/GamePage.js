import React, { useEffect, useState } from "react";
import GratitudeModal from "../../components/modals/GratitudeModal/GratitudeModal";
import { Container, Image, Col, Card, Row, Button } from "react-bootstrap";
import {useParams} from 'react-router-dom'
import { fetchGames, fetchOneGame } from "../../http/gameAPI";
import { check, fetchUserInfo, newBalance } from "../../http/userAPI";
import ConfirmModal from "../../components/modals/ConfirmModal/ConfirmModal";
import { useDispatch, useSelector } from "react-redux";
import { updateBalanceAction } from "../../store/action-creators/action-creators";
import ErrorConfirmModal from "../../components/modals/ErrorConfirmModal/ErrorConfirmModal";
import AuthErrorModal from "../../components/modals/AuthErrorModal/AuthErrorModal";

const GamePage = () => {
    const [userId, setUserId] = useState('')
    const [user, setUser] = useState(null)
    const [authErrorVisible, setAuthErrorVisible] = useState(false)
    const [confirmModalVisible, setConfirmModalVisible] = useState(false)
    const [gratitudeModalVisible, setGratitudeModalVisible] = useState(false)
    const [errorConfirmVisible, setErrorConfirmVisible] = useState(false)
    const [game, setGame] = useState({})
    const userInfo = useSelector(state => state.user)
    const { id } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        check().then(data => {
            setUserId(data.id)
        })
    }, [])

    useEffect(() => {
        if (userId ) {
            fetchUserInfo(userId).then(data => {
                setUser(data)
            }) 
        }
    }, [userId, userInfo.balance])

    useEffect(() => {
        fetchOneGame(id).then(data => setGame(data))
    }, [])


    const buy = async () => {
        if (userInfo.auth === false) {
            setAuthErrorVisible(true)
        }

        else if (Number(user.balance) < Number(game.price)) {
            setErrorConfirmVisible(true)
        }
        else {
            const response = await newBalance(userId, (-Number(game.price)))
            dispatch(updateBalanceAction(response.balance))
            setConfirmModalVisible(false)
            setGratitudeModalVisible(true)
        }    
    }

    return ( 
        <Container>
            <Row>
                <Col md={8}>
                    <h1>{game.name}</h1>
                    <Image width="100%" height={400} src={process.env.REACT_APP_API_URL + game.gameImg} />
                    <Card
                        className="d-flex justify-content-center"
                        style={{ width: '100%', height: '100px', marginTop: '10px' }}
                    >
                        <h3 style={{marginLeft:'5px'}}>{game.name}</h3>
                        <div className="d-flex">
                            <div
                                className="d-flex align-items-center justify-content-center"
                                style={{ border: '1px solid black', borderRadius: '5px', padding:'2px', margin:'0 10px 0 5px', width:'70px' }}
                            >
                                {game.price}Р
                            </div>
                            <Button
                                onClick={() => setConfirmModalVisible(true)}
                                variant="outline-dark"
                            >
                                Купить
                            </Button>
                        </div>
                    </Card>
                 </Col>
                 <Col md={4}>
                    <Card style={{ height: '448px', marginTop: '10px' }}>
                        <div className="d-flex align-items-center justify-content-centr flex-column">
                            <h2>Описание</h2>
                            <div style={{margin:'10px'}}>
                                {game.info}
                            </div>
                        </div>
                        
                    </Card>
                </Col>
            </Row>
            <ConfirmModal
                show={confirmModalVisible}
                onHide={() => setConfirmModalVisible(false)}
                gameName={game.name}
                count={game.price}
                buy={buy}
                setGratitudeModalVisible={setGratitudeModalVisible}
            />
            <AuthErrorModal show={authErrorVisible} onHide={() => setAuthErrorVisible(false)}/>
            <GratitudeModal show={gratitudeModalVisible} onHide={() => setGratitudeModalVisible(false)} />
            <ErrorConfirmModal show={errorConfirmVisible} onHide={() => setErrorConfirmVisible(false)}/>
        </Container>
     );
}
 
export default GamePage;