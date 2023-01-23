import React from 'react';
import '../style/NavBar.css'
import {NavLink} from "react-router-dom";


const NavBar = () => {
    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <NavLink className='navbar-item' to='/'>Главная</NavLink>
                <NavLink className='navbar-item' to='/profile'>Обо мне</NavLink>
                <NavLink className='navbar-item' to='/projects'>Проекты</NavLink>
                <NavLink className='navbar-item' to='/contact'>Связь</NavLink>
            </div>
        </nav>
    );
};

export default NavBar;