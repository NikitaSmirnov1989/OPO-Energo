import { ChangeEvent, useEffect, useState } from "react";
import styles from "./Search.module.css";
import { changeSearchStr } from "../../Features/Slices/searchStringSlice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../Features/store";
import searchImg from "../../files/img/Search/search.svg";

export default function Search(){      
    const dispatch = useDispatch();  
    const str = useSelector((state: RootState) => state.searchString.search);
    return  <div className={styles.search}>
                <div className={styles.container}>
                    <div className={styles.search_wrapper}>
                        <div className={styles.search_field}>
                            <input placeholder={"Введите название курса"} className={styles.search_field_input} onChange={e => dispatch(changeSearchStr(e.target.value))} type="text" value={str}/>
                            <img className={styles.search_field_img} src={searchImg} alt="search" />
                        </div>
                    </div>
                </div>
            </div>
}