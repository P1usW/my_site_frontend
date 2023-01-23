import React, {useEffect} from 'react';
import bg from "./style/background/bg.jpg";
import mountain from "./style/background/mountain.png";
import road from "./style/background/road.png";
import moon from "./style/background/moon.png";
import './style/Background.css'

const Background = () => {

    useEffect(() => {
        const moon = document.querySelector('#moon')
        const bg = document.querySelector('#bg')
        const mountain = document.querySelector('#mountain')
        const road = document.querySelector('#road')
        window.addEventListener('scroll', (event) =>{
            let scrollYPage = window.scrollY
            moon.style.right = scrollYPage * 0.5 + 'px'
            road.style.top = scrollYPage * 0.15 + 'px'
            mountain.style.top = -scrollYPage * 0.15 + 'px'
            bg.style.top = scrollYPage * 0.5 + 'px'
        })
    },[])

    return (
        <section className='back'>
            <img id='bg' src={bg}/>
            <img id='mountain' src={mountain}/>
            <img id='road' src={road}/>
            <img id='moon' src={moon}/>
        </section>
    );
};

export default Background;