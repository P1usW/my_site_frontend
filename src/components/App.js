import React from 'react';
import HomePage from "./HomePage";
// import Profile from "./Profile";
// import Projects from "./Projects";
import {Routes, Route} from "react-router-dom";
import ErrorPage from "./ErrorPage/ErrorPage";
import './style/App.css'
import NavBar from "./NavBar/NavBar";
import Contact from "./Contact";

const Profile = React.lazy(() => import("./Profile"))
const Projects = React.lazy(() => import("./Projects"))

const App = () => {
    return (
        <ErrorPage>
            <div className='main-container'>
                <NavBar/>
                <React.Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path='/' element={<HomePage/>}></Route>
                        <Route path='/profile' element={<Profile/>}></Route>
                        <Route path='/projects' element={<Projects/>}></Route>
                        <Route path='/contact' element={<Contact/>}></Route>
                    </Routes>
                </React.Suspense>
            </div>
        </ErrorPage>
    );
};

export default App;