import styles from "./Main.module.css";
import { Outlet, Link } from "react-router-dom";
import Nav from "../Nav";
import Footer from "../Footer";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../Features/store";
import favoritesImg from "../../files/img/Favorites/favorites.svg";
import logoImg from "../../files/img/Main/logo.svg";

export default function Main(){
    const {favorites} = useSelector((state: RootState) => state.favoritesCourses);
    const {popup} = useSelector((state: RootState) => state.popupReducer);
    const dispatch = useDispatch();
   
    return <div className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.main_wrapper}>
                        <div className={styles.header}>
                            <div className={styles.logo}>
                                <img src={logoImg} alt="logo" />
                            </div>
                            <Nav/> 
                        </div>
                        <div className={styles.favorites}>
                            <Link to={"/favorites"} className={styles.favorites_link}>
                                <span className={styles.favorites_count}>
                                    {favorites.length}
                                </span>
                                 <span className={styles.favorites_img}>
                                    <img src={favoritesImg} alt="favorites" />
                                </span>
                            </Link>
                        </div>
                        <div className={styles.content}>
                            <Outlet/>
                        </div>
                        
                        <div className={styles.footer}>
                            <Footer/>
                        </div>
                        
                    </div>
                </div>
            </div>
}