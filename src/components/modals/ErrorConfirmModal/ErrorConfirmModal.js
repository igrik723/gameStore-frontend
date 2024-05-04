import { Button, Modal } from "react-bootstrap";
import classes from './ErrorConfirmModal.module.css'

const ErrorConfirmModal = ({show, onHide}) => {


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
                        На вашем счете недостаточно средств. Пополните счет и повторите попытку.
                    </div>
                    <div
                        className={classes.buttonContainer}
                    >
                        <button
                            className={classes.cancelButton}
                            onClick={onHide}
                        >
                            Выйти
                        </button>
                    </div>
                </div>
            </div>
        </Modal>

    );
}

export default ErrorConfirmModal

