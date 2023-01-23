import React from 'react';
import './bb.css'
import {Link} from "react-router-dom";

const ButtonA = ({children}) => {
    return (
        <Link to='/contact'>
            <div className='btn'>
                <div className='b-btn'/>
                <span className='contact-me'>Связаться со мной!</span>
            </div>
        </Link>
    );
};

export default ButtonA;