import { Modal } from "react-bootstrap";
import classes from './GratitudeModal.module.css'
import gratitudeImage from "../../../assets/gratitude.png";

const GratitudeModal = ({ show, onHide }) => {


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
                    <img src={gratitudeImage} className={classes.image} />
                    <div
                        className={classes.mainTitle}
                    >
                        СПАСИБО ЗА 
                    </div>
                    <div
                        className={classes.mainTitle}
                    >
                        ПОКУПКУ! 
                    </div>
                    <div
                        className={classes.secondaryTitle}
                    >
                        код можете посмотреть во вкладке 'Мои игры'
                    </div>
                </div>
            </div>
        </Modal>

    );
}

export default GratitudeModal
