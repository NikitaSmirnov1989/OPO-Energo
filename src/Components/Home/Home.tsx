import styles from "./Home.module.css";
import personeCheck from "../../files/img/Home/personeCheck.svg";
import personePlus from "../../files/img/Home/personePlus.svg";
import personeDash from "../../files/img/Home/personeDash.svg";
import personeX from "../../files/img/Home/personeX.svg";

export default function Home(){
    return  <div className={styles.home}>
                <div className={styles.container}>
                    <div className={styles.home_wrapper}>
                        <h2 className={styles.home_title}>Автономная некоммерческая орагнизация дополнительного профессионального образования Учебный центр «ОПО-ЭНЕРГО»</h2>
                        <p className={styles.home_description}>
                            Учебный центр «ОПО-ЭНЕРГО» - это инновационное образовательное учреждение, которое стремится к созданию стимулирующей и вдохновляющей среды для обучения и развития. Наша деятельность охватывает следующие направления:
                        </p>
                        <ul className={styles.home_list}>
                            <li className={styles.home_item}>
                                <h6 className={styles.home_item_title}>Проведение курсов и тренингов:</h6> 
                                <div className={styles.home_item_content}>
                                    <div className={styles.home_item_content_img}>
                                        <img src={personeCheck} alt="persone" />
                                    </div>
                                    <p className={styles.home_item_content_text}>
                                        Разнообразные курсы и тренинги по различным темам и предметам. Это может включать в себя профессиональное обучение, курсы по повышению квалификации, языковые курсы, подготовку к экзаменам и многое другое.
                                    </p>
                                </div>

                            </li>
                           <li className={styles.home_item}>
                                <h6 className={styles.home_item_title}>
                                    Консультации и индивидуальное обучение: 
                                </h6>
                                <div className={styles.home_item_content}>
                                    <div className={styles.home_item_content_img}>
                                        <img src={personePlus} alt="persone" />
                                    </div>
                                    <p className={styles.home_item_content_text}>
                                        Индивидуальные занятия или консультации по конкретным предметам или навыкам. Это позволяет студентам получить персонализированную помощь и поддержку.
                                    </p>    
                                </div>
                                
                            </li>
                            <li className={styles.home_item} >
                                <h6 className={styles.home_item_title}>Онлайн-обучение и дистанционные программы: </h6>
                                <div className={styles.home_item_content}>
                                    <div className={styles.home_item_content_img}>
                                        <img src={personeDash} alt="persone" />
                                    </div>
                                    <p className={styles.home_item_content_text}>
                                        Онлайн или дистанционное обучение. Это делает обучение более доступным для людей, которые не могут посещать занятия на месте.
                                    </p>
                                </div>
                                
                            </li>
                            <li className={styles.home_item}>
                                <h6 className={styles.home_item_title}>Подготовка к экзаменам и сертификациям:</h6>
                                <div className={styles.home_item_content}>
                                    <div className={styles.home_item_content_img}>
                                        <img src={personeX} alt="persone" />
                                    </div>
                                    <p className={styles.home_item_content_text}>
                                        Возможность предоставить курсы подготовки к различным экзаменам и сертификационным программам. Это может включать в себя подготовку к стандартизированным тестам, профессиональным экзаменам или сертификациям в конкретной области.
                                    </p>
                                </div>
                                
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
};


