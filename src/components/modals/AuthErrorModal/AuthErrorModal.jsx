import { Button, Modal } from "react-bootstrap";
import classes from './AuthErrorModal.module.css'

const AuthErrorModal = ({ show, onHide}) => {


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
                    <div
                        className={classes.mainTitle}
                    >
                        Для того, чтобы совершать покупки авторизуйтесь и повторите попытку
                    </div>
                    <div
                        className={classes.buttonContainer}
                    >
                        <button
                            className={classes.cancelButton}
                            onClick={onHide}
                        >
                            Отменить
                        </button>
                    </div>
                </div>
            </div>
        </Modal>

    );
}

export default AuthErrorModal

