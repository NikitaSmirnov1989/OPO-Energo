import styles from "./PopUp.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../Features/store";
import checkSquare from "../../files/img/Popup/check-square.svg"

export default function PopUp(){
    const {popup, text} = useSelector((state: RootState) => state.popupReducer)
    return  <div className={styles.popup}>
                <div className={styles.container}>
                    <div className={styles.pop_wrapper}>
                        <div className={styles.popup_img}>
                            <img src={checkSquare} alt="img" />
                        </div>
                        <div className={styles.popup_text}>
                            {text}
                        </div>
                    </div>
                </div>
            </div>
}