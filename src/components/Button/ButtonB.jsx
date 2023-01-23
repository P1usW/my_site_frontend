import React from 'react';
import '../style/Button.css'


const ButtonB = ({children}) => {
    return (
        <button className='open-btn'>
            {children}
        </button>
    );
};

export default ButtonB;