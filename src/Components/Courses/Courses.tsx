import styles from "./Courses.module.css";
import List from "../List";
import courses from "../../Courses/courses";
import WithList from "../HOC/WithList";

export default function Courses(){
    const EnhancedList = WithList(List);
    return  <div className={styles.contacts}>
                <div className={styles.courses}>
                    <div className={styles.courses_wrapper}>
                        <h2 className={styles.courses_title}>Список всех курсов</h2>
                        <EnhancedList list={courses}/>
                    </div>
                </div>
            </div>
}
