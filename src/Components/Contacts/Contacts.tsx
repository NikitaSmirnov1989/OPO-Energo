import styles from "./Contacts.module.css";
import email from "../../files/img/Contacts/email.svg";
import telegram from "../../files/img/Contacts/telegram.svg";
import telephone from "../../files/img/Contacts/telephone.svg";
import whatsapp from "../../files/img/Contacts/whatsapp.svg";
import worktime from "../../files/img/Contacts/worktime.svg";

export default function Contacts(){
    return  <div className={styles.contacts}>
                <div className={styles.container}>
                    <div className={styles.contacts_wrapper}>
                        <h2 className={styles.contacts_title}>Контактная информация</h2>
                        <div className={styles.contacts_list}>
                            <div className={styles.contacts_item}>
                                <h6 className={styles.contacts_item_title}>Для физических лиц</h6>
                                <div className={styles.contacts_item_phone}>
                                    <div className={`${styles.contacts_item_phone_img} ${styles.contacts_all_img}`}>
                                        <img src={telephone} alt="img" />
                                    </div>
                                    <div className={styles.contacs_item_phone_number}>
                                        <a href={`tel:+79163352088`}>Позвонить: {`+7(916)335-20-88`}</a>
                                    </div>
                                </div>
                                <div className={styles.contacts_item_worktime}>
                                    <div className={`${styles.contacts_item_worktime_img} ${styles.contacts_all_img}`}>
                                        <img src={worktime} alt="img" />
                                    </div>
                                    <div className={styles.contacts_item_worktime_time}>
                                        <ul className={styles.contacts_item_worktime_time_list}>
                                            <li>Время работы:</li>
                                            <li>Понедельник - пятницы</li>
                                            <li>с 09-00 до 18-00</li>
                                            <li>Суббота-воскресенье</li>
                                            <li>с 09-00 по 16-00</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className={styles.contacts_item_email}>
                                    <div className={`${styles.contacts_item_email_img} ${styles.contacts_all_img}`}>
                                        <img src={email} alt="img" />
                                    </div>
                                    <div className={styles.contacts_item_email_address}><a href="mailto:opo-energo@mail.ru">Email: opo-energo@mail.ru</a></div>
                                </div>
                                <div className={styles.contacts_item_whatsapp}>
                                    <div className={`${styles.contacts_item_whatsapp_img} ${styles.contacts_all_img}`}>
                                        <img src={whatsapp} alt="img" />
                                    </div>
                                    <div className={styles.contacts_item_whatsapp_number}>
                                        <a href={`https://wa.me/79163352088`}>Написать в WhatsApp: {`+7(916)335-20-88`}</a>
                                    </div>
                                </div>
                                <div className={styles.contacts_item_telegram}>
                                    <div className={`${styles.contacts_item_telegram_img} ${styles.contacts_all_img}`}>
                                        <img src={telegram} alt="img" />
                                    </div>
                                    <div className={styles.contacts_item_telegram_number}>
                                        <a href={`https://t.me/nikita_sm_89`}>Написать в Telegram: {`+7(910)456-68-21`}</a>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.contacts_item}>
                                <h6 className={styles.contacts_item_title}>Для юридических лиц</h6>
                                <div className={styles.contacts_item_phone}>
                                    <div className={`${styles.contacts_item_phone_img} ${styles.contacts_all_img}`}>
                                        <img src={telephone} alt="img" />
                                    </div>
                                    <div className={styles.contacs_item_phone_number}>
                                        <a href={`tel:+74956205989`}>Позвонить: {`+7(495)620-59-89`}</a>
                                    </div>
                                </div>
                                <div className={styles.contacts_item_worktime}>
                                    <div className={`${styles.contacts_item_worktime_img} ${styles.contacts_all_img}`}>
                                        <img src={worktime} alt="img" />
                                    </div>
                                    <div className={styles.contacts_item_worktime_time}>
                                        <ul className={styles.contacts_item_worktime_time_list}>
                                            <li>Время работы:</li>
                                            <li>Понедельник - пятницы</li>
                                            <li>с 09-00 до 18-00</li>
                                            <li>Суббота-воскресенье</li>
                                            <li>с 09-00 по 16-00</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className={styles.contacts_item_email}>
                                    <div className={`${styles.contacts_item_email_img} ${styles.contacts_all_img}`}>
                                        <img src={email} alt="img" />
                                    </div>
                                    <div className={styles.contacts_item_email_address}><a href="mailto:opo-energo@mail.ru">Email: opo-energo@mail.ru</a></div>
                                </div>
                                <div className={styles.contacts_item_whatsapp}>
                                    <div className={`${styles.contacts_item_whatsapp_img} ${styles.contacts_all_img}`}>
                                        <img src={whatsapp} alt="img" />
                                    </div>
                                    <div className={styles.contacts_item_whatsapp_number}>
                                        <a href={`https://wa.me/79104566821`}>Написать в WhatsApp: {`+7(495)620-59-89`}</a>
                                    </div>
                                </div>
                                <div className={styles.contacts_item_telegram}>
                                    <div className={`${styles.contacts_item_telegram_img} ${styles.contacts_all_img}`}>
                                        <img src={telegram} alt="img" />
                                    </div>
                                    <div className={styles.contacts_item_telegram_number}>
                                        <a href={`https://t.me/nikita_sm_89`}>Написать в Telegram: {`+7(910)456-68-21`}</a>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
};

