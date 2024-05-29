import styles from "./Footer.module.css";
//<a href={`tel:+74954757344`}>Позвонить: {`+7(495)475-73-44`}</a>
//<a href={`https://t.me/nikita_sm_89`}>Написать в Telegram: {`+7(910)456-68-21`}</a>
//<a href={`https://wa.me/79104566821`}>Написать в WhatsApp: {`+7(910)456-68-21`}</a>
import rus from "../../files/img/Footer/rus.svg";
import logo from "../../files/img/Footer/logo.svg";
import { Link } from "react-router-dom";

export default function Footer(){
    return  <div className={styles.footer}>
                <div className={styles.container}>
                    <div className={styles.footer_wrapper}>
                        <div className={styles.footer_logo}>
                            <div className={styles.footer_logo_img}>
                                <img src={logo} alt="logo" />
                            </div>
                        </div>
                        <div className={styles.footer_info}>
                            <div className={styles.footer_info_item}>
                                <a href={`tel:+79163352088`}>8(916)335-20-88</a>
                            </div>
                            <div className={styles.footer_info_item}>
                                <a href={`tel:+79104566821`}>8(495)620-59-89</a>
                            </div>
                            <div className={styles.footer_info_item}>
                                <a href={`mailto:opo-energo@mail.ru`}>opo-energo@mail.ru</a>
                            </div>
                            <div className={styles.footer_info_item}>
                                <Link to="/">О центре</Link>
                            </div>
                            <div className={styles.footer_info_item}>
                            <Link to="/address">Адрес</Link>
                            </div>
                        </div>
                        <div className={styles.footer_flag}>
                            <div className={styles.footer_item_img}>
                                <img src={rus} alt="rus" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
}