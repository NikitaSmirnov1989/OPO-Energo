import styles from "./Login.module.css";
import Search from "../Search";
import parser from 'html-react-parser';
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../Features/store";
import courses from "../../Courses/courses";
import { CourseItem } from "../../Courses/courses";
import List from "../List";
import { useEffect } from "react";

export default function Login(){
    const {search} = useSelector((state: RootState) => state.searchString);
    function markedString(str: string, index: number, markedLength: number ) : string {
        return index === -1 ? str : parser(str.slice(0, index) + (`<mark>${str.slice(index, index + markedLength)}</mark>`) + str.slice(index + markedLength)) as string;
    }
    function newArray<T extends CourseItem>(array: T[]) : T[]{
        return array.
                    filter((item, j) => {
                        return item.title.toLowerCase().indexOf(search.toLowerCase()) > -1;
                    })
                    .map((item, index) => {
                        const titleStartIndex = item.title.toLowerCase().indexOf(search.toLowerCase());
                        return  {
                                    ...item,
                                    title: markedString(item.title, titleStartIndex, search.length),
                                }
                    })
    }
    useEffect(() => {
        console.log(newArray(courses));
    }, [search]);
    const arr = newArray(courses);
    return  <div className={styles.login}>
                <div className={styles.container}>
                    <div className={styles.login_wrapper}>
                        <Search/>
                        <div className={styles.login_count}>Всего найдено: {search.length === 0 || arr.length === 0 ? 0 : arr.length}</div>
                        <div className={styles.login_list}>
                            {search === "" || arr.length === 0 ? "Пусто" :  <List list={arr}/>}
                        </div>
                    </div>
                </div>
            </div>
};
