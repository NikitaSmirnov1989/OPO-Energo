import { useEffect, useState } from "react";
import styles from "./Nav.module.css";
import { Link, NavLink } from "react-router-dom";
import open from "../../files/img/Nav/open.svg";
import close from "../../files/img/Nav/close.svg"
import { isPending } from "@reduxjs/toolkit";

export default function Nav(){
    const [isOpen, setIsOpen] = useState(false);
    function toggleMenu(){
        setIsOpen(!isOpen);
    };
    function handleResize(){
        setIsOpen(false);
    
    };
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])
    return  <div className={styles.nav}>
                <div className={styles.container}>
                    <div className={styles.nav_wrapper}>
                        <div className={styles.burger_menu}>
                            <div className={`${styles.menu} ${isOpen ? styles.open : styles.close}`}>
                                <ul className={styles.menu_list}>
                                    <li className={styles.menu_item}>
                                        <NavLink className={({isActive, isPending}) => isPending ? `${styles.link}` : isActive ? `${styles.link} ${styles.active}` : `${styles.link}`} onClick={() => toggleMenu()} to="/">Главная</NavLink>
                                    </li>
                                    <li className={styles.menu_item}>
                                        <NavLink className={({isActive, isPending}) => isPending ? `${styles.link}` : isActive ? `${styles.link} ${styles.active}` : `${styles.link}`} onClick={() => toggleMenu()} to="/contacts">Контакты</NavLink>
                                    </li>
                                    <li className={styles.menu_item}>
                                        <NavLink className={({isActive, isPending}) => isPending ? `${styles.link}` : isActive ? `${styles.link} ${styles.active}` : `${styles.link}`} onClick={() => toggleMenu()} to="/courses">Курсы</NavLink>
                                    </li>
                                    <li className={styles.menu_item}>
                                        <NavLink className={({isActive, isPending}) => isPending ? `${styles.link}` : isActive ? `${styles.link} ${styles.active}` : `${styles.link}`} onClick={() => toggleMenu()} to="/login">Логин</NavLink>
                                    </li>
                                </ul>
                                <div className={`${styles.burger_icon}`} onClick={() => toggleMenu()}>
                                <div className={styles.burger_icon_img}>
                                    <img src={isOpen ? close : open} alt={isOpen ? "close" : open} />{isOpen ? "X" : "="}
                                </div>
                                
                            </div>
                            </div>
                
                        </div> 
                        
                    </div>
                </div>
            </div>
}