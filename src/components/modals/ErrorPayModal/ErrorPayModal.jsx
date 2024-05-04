import { Modal } from "react-bootstrap";
import classes from './ErrorPayModal.module.css'


const ErrorPayModal = ({ show, onHide }) => {
    

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
                    При поплнении счета возникла ошибка, проверьте правильность данных и повторите попытку
                </h3>
                <button
                    className={classes.btn}
                    onClick={onHide}
                >
                    ПОВТОРИТЬ
                </button>
            </div>  
        </Modal>
        
    );
}

export default ErrorPayModal
