import styles from "./List.module.css";
import { Link } from "react-router-dom";
import { addCource,removeCource } from "../../Features/Slices/favoriitesSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Features/store";
import durationImg from "../../files/img/Courses/duration.svg";
import priceImg from "../../files/img/Courses/price.svg";
import detailsImg from "../../files/img/Courses/details.svg";
import addImg from "../../files/img/Courses/add.svg";
import removeImg from "../../files/img/Courses/remove.svg";
import PopUp from "../PopUp";
import { useEffect } from "react";
import { popupChange } from "../../Features/Slices/popupSlice";

type CourseItem = {
    id: number;
    duration: number;
    price: number;
    tag: string;
    title: string;
};
type List = CourseItem[];

function List(props: {list: List}) : JSX.Element {
    const {favorites} = useSelector((state: RootState) => state.favoritesCourses);
    const {popup} = useSelector((state: RootState) => state.popupReducer);
    const dispatch = useDispatch();
    const {list} = props;
    useEffect(() => {
        if(popup){
            setTimeout(() => {
                dispatch(popupChange(false));
            }, 3000)
        }
    }, [popup])
    return  <ul className={styles.courses_list}>
                    {popup ? <PopUp/> : ""}
                    {list.map(({id, duration, price, tag, title}, i) => {
                        const isIncludes = favorites.includes(id);
                        return  <li key={id} className={styles.courses_item}>
                                    <h6 className={styles.courses_item_title}>{title}</h6>
                                    <div className={styles.courses_item_price}>
                                        <div className={`${styles.courses_item_price_img} ${styles.img_all}`}>
                                            <img src={priceImg} alt="price" />
                                        </div>
                                        <div className={styles.courses_item_price_text}>
                                            Стоимость обучения: {price.toLocaleString("ru-RU", {useGrouping: true})} руб.
                                        </div>
                                    </div>
                                    <div className={styles.courses_item_duration}>
                                        <div className={`${styles.courses_item_duration_img} ${styles.img_all}`}>
                                            <img src={durationImg} alt="duration" />
                                        </div>
                                        <div className={styles.courses_item_duration_text}>
                                            Продолжительность: {duration} час.</div>
                                        </div>
                                        
                                    <div className={styles.courses_item_favorites_btns}>
                                        
                                        <div className={styles.courses_item_favorites_btn}>
                                            <button
                                                
                                                className={styles.courses_item_favorites_btn} onClick={() => dispatch(addCource({id}))}>+</button>
                                        </div>
                                        <div className={styles.courses_item_favorites_btn}>
                                            <button
                                                className={styles.courses_item_favorites_btn} onClick={() => dispatch(removeCource({id}))}>-</button>
                                        </div>
                                        <div className={styles.courses_item_favorites_bntimg}>
                                            <img src={isIncludes ? addImg : removeImg} alt="img" />
                                        </div>
            
                                    </div>
                                    <div className={styles.courses_item_details}>
                                        <Link 
                                            to={`/courses/${id}`}
                                            state={{id, duration, price, tag, title}}
                                        >Подробнее</Link>
                                        <div className={`${styles.courses_item_details_img} ${styles.img_all}`}>
                                            <img src={detailsImg} alt="details" />
                                        </div>
                                        
                                    </div>
                                </li>
                    })}
        </ul>
};
export default List;