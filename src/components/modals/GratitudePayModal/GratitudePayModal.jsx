import { Modal } from "react-bootstrap";
import classes from './GratitudePayModal.module.css'


const GratitudePayModal = ({ show, onHide }) => {


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
                <h3>
                    Ваш счет успешно пополнен. Спасибо, что пользуетесь нашим банком.
                </h3>
                <button
                    className={classes.btn}
                    onClick={onHide}
                >
                    ВЫХОД
                </button>
            </div>
        </Modal>

    );
}

export default GratitudePayModal
