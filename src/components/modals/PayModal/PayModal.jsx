import { Modal } from "react-bootstrap";
import classes from './PayModal.module.css'
import { useDispatch } from "react-redux";
import { addMoneyAction, updateBalanceAction } from "../../../store/action-creators/action-creators";
import { useEffect, useState } from "react";
import { check, newBalance } from "../../../http/userAPI";
import ErrorPayModal from "../ErrorPayModal/ErrorPayModal";

const PayModal = ({ show, onHide, onError, onGratitude }) => {
    const [userId, setUserId] = useState('')
    const [amount, setAmount] = useState('')
    const [cvc, setCvc] = useState('')
    const [date, setDate] = useState('')
    const [cardNumber, setCardNumber] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        check().then(data => {
            setUserId(data.id)
        })
    }, [])
    
    const checkError = () => {
        if (cvc === '' || date === '' || cardNumber === '') {
            onError()
            return false
        } else {
            return true
        }
    }

    const addMoney = async () => {
        const response = await newBalance(userId, Number(amount))
        if (checkError()) {
            dispatch(updateBalanceAction(response.balance))
            setAmount('')
            setCardNumber('')
            setCvc('')
            setDate('')
            onHide()
            onGratitude()
        }
        setAmount('')
        setCardNumber('')
        setCvc('')
        setDate('')
        onHide()
    }



    return ( 
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <div
                className={classes.wrapper}
            >
                <div
                    className={classes.container}
                >
                    <h1
                        className={classes.logo}
                    >
                        Y
                    </h1>
                    <h2
                        className={classes.title}
                    >
                        ИГРИК БАНК
                    </h2>
                    
                </div>
                <input
                    className={classes.form}
                    placeholder="Введите сумму"
                    type="number "
                    value={amount}
                    onChange={e => setAmount(e.target.value)}
                />
                <input
                    className={classes.form}
                    placeholder="0000 0000 0000 0000"
                    type="number"
                    value={cardNumber}
                    onChange={e => setCardNumber(e.target.value)}
                />
                <div
                    className={classes.formWrapper}
                >
                    <input
                        placeholder="ММ/ГГ"
                        className={classes.dateForm}
                        type="number"
                        value={date}
                        onChange={e => setDate(e.target.value)}
                    />
                    <input
                        placeholder="CVC"
                        className={classes.cvcForm}
                        type="number"
                        value={cvc}
                        onChange={e => setCvc(e.target.value)}
                    />
                </div>
                <div
                    className={classes.textWrapper}
                >
                    <input
                        type="checkbox"
                    />
                    <h6
                        className={classes.text}
                    >
                        Подтвердите, что вы молодец
                    </h6>
                </div>
                <button
                    className={classes.btn}
                    onClick={addMoney}
                >
                    ОПЛАТИТЬ
                </button>
            </div>
        </Modal>
     );
}
 
export default PayModal
