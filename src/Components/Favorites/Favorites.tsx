import styles from "./Favorites.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../Features/store";
import courses from "../../Courses/courses";
import { CourseItem } from "../../Courses/courses";
import List from "../List";

export default function Favorites(){
    const {favorites} = useSelector((state: RootState) => state.favoritesCourses);
    function getFavorites(arr: number[]) : CourseItem[] {
        return arr.map((item, i) => {
            const index = courses.findIndex((el, j) => {
                return el.id === item;
            });
            return courses[index];
        })
    }
    function getSum(arr: CourseItem[]) : number {
        return arr.reduce((acc, current) => {
            return acc + current.price;
        }, 0);
    }
    const favoritesCourses = getFavorites(favorites);
    return  <div className={styles.favorites}>
                <div className={styles.container}>
                    <div className={styles.favorites_wrapper}>
                        <div className={styles.favorites_count}>
                            <h2 className={styles.favorites_title}>
                                Всего выбрано: {(favorites.length)}
                            </h2>
                        </div>
                        {favorites.length === 0 ? "Нет выбранных курсов" : <List list={favoritesCourses}/>}
                        <div className={styles.favorites_amout}>
                            Итого: {getSum(favoritesCourses).toLocaleString("ru-RU", {useGrouping: true})} руб.
                        </div>
                    </div>
                </div>
            </div>

            
};