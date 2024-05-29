import styles from "./CourseCard.module.css";
import { useLocation } from "react-router-dom";
import exclamation from "../../files/img/CourseCard/exclamation.svg";
import { Link } from "react-router-dom";

export default function CourseCard(){
    const {state} = useLocation();
    return  <div className={styles.courseCard}>
                <div className={styles.container}>
                    <div className={styles.courseCard_wrapper}>
                        <div className={styles.courseCard_img}>
                            <img src={exclamation} alt="exclamation"/>
                        </div>
                        <div className={styles.courseCard_text}>
                            Ведутся ремонтные работы на сайте. Пронисом свои извинения!
                        </div>
                        <div className={styles.courseCard_back}>
                            <Link to="/courses">Назад</Link>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
}