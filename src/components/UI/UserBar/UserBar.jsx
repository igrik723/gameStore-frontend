import React, { useEffect, useState } from "react";
import { Image, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getInfoAction, updateBalanceAction, userOutAction } from "../../../store/action-creators/action-creators";
import plusImage from "../../../assets/plus.png";
import classes from './UserBar.module.css'
import PayModal from "../../modals/PayModal/PayModal";
import { fetchUserInfo } from "../../../http/userAPI";
import { check } from "../../../http/userAPI";
import ErrorPayModal from "../../modals/ErrorPayModal/ErrorPayModal";
import GratitudePayModal from "../../modals/GratitudePayModal/GratitudePayModal";

const UserBar = () => {
    const user = useSelector(state => state.user)
    const [balance, setBalance] = useState(0)
    const [userId, setUserId] = useState('')
    const [payVisible, setPayVisible] = useState(false)
    const [errorVisible, setErrorVisible] = useState(false)
    const [gratitudeVisible, setGratitudeVisible] = useState(false)
    const dispatch = useDispatch()
    const logOut = () => {
        dispatch(userOutAction())
    }

    useEffect(() => {
        check().then(data => {
            setUserId(data.id)
        })
    }, [])

    useEffect(() => {
        if (userId) {
            fetchUserInfo(userId).then(data => dispatch(updateBalanceAction(data.balance)))
        } 
    }, [userId])

    return ( 
        <div
            className="d-flex"
        >
            <div
                className="d-flex"
                style={{marginRight:'5px'}}
            >
                <div
                    style={{marginTop:'6px'}}
                >
                    Баланс: {user.balance} рублей
                </div>
                <Image
                    style={{ width: '20px', height: '20px', marginTop: '10px', marginRight: '2px', cursor:'pointer' }}
                    src={plusImage}
                    onClick={() => setPayVisible(true)}
                />
            </div>
            <Button
                variant="outline-secondary"
                onClick={() => logOut()}
            >
                Выйти
            </Button>
            <PayModal show={payVisible} onHide={() => setPayVisible(false)} onError={() => setErrorVisible(true)} onGratitude={() => setGratitudeVisible(true)} />
            <ErrorPayModal show={errorVisible} onHide={() => setErrorVisible(false)} />
            <GratitudePayModal show={gratitudeVisible} onHide={() => setGratitudeVisible(false)}/>
        </div>
     );
}
 
export default UserBar;