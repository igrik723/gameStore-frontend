import { Button, Modal } from "react-bootstrap";
import classes from './ConfirmModal.module.css'

const ConfirmModal = ({ show, onHide, gameName, count, buy}) => {


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
                        Вы собираетесь купить {gameName} за {count} рублей
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
                        <button
                            className={classes.confirmButton}
                            onClick={buy}
                        >
                            Подтвердить
                        </button>
                    </div>
                </div>
            </div>
        </Modal>

    );
}

export default ConfirmModal

