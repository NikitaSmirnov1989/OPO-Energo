import React from 'react';
import styles from './App.module.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Components/Main';
import Home from './Components/Home';
import Contacts from './Components/Contacts';
import Courses from './Components/Courses';
import Login from './Components/Login';
import CourseCard from './Components/CourseCard';
import Favorites from './Components/Favorites';
import Address from './Components/Address';

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}>
            <Route index element={<Home/>}/>
            <Route path="/courses" element={<Courses/>}/>
            <Route path="/courses/:courseId" element={<CourseCard/>}></Route>
            <Route path="/contacts" element={<Contacts/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/favorites" element={<Favorites/>}/>
            <Route path="/address" element={<Address/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
