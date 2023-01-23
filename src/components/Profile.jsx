import React, {useEffect, useRef, useState} from 'react';
import './style/Profile.css'

import logo_vk from "./style/icons/Tilda_Icons_26sn_vk.svg";
import logo_ds from "./style/icons/Tilda_Icons_26sn_diskord.svg";
import logo_git from "./style/icons/Tilda_Icons_26sn_gethub.svg";
import logo_gmail from "./style/icons/Tilda_Icons_26sn_google.svg";
import logo_tg from "./style/icons/Tilda_Icons_26sn_telegram.svg";
import photo from "./style/8fDTCtxqbyk.jpg";
import ideas_icon from "./style/icons/Tilda_Icons_40_IT_ideas.svg";


const Profile = () => {
    const [hrefLogo] = useState({
            logoVk: 'https://vk.com/ivan_4cb',
            logoDs: 'https://discordapp.com/users/300596510012211200/',
            logoGit: 'https://github.com/P1usW',
            logoGmail: 'mailto:ivshavrin@gmail.com',
            logoTg: 'https://t.me/Ivan_4CB',
    })

    const profilePage = useRef(null)
    useEffect(() => {
        setTimeout(() => {profilePage.current.style.opacity = 1;}, 0)
    },[])

    return (
        <div className='profile-page'>
            <div className='about-me' ref={profilePage}>
                <h2>
                    Обо мне и моих увлечениях
                </h2>
                <p>
                    Я fullstack разработчик из России. В основном люблю заниматься frontend составляющией сайта,
                    ведь именно здесь получается применить все свои творческие умения. Всегда стремлюсь к
                    изучению чего-то нового и неизведанного.
                </p>
                <div>
                    <p>Про себя могу написать несколько предложений:</p>
                    <ul className='about-me-list'>
                        <li>Организованный человек, если поставлена задача, она должна быть выполена.</li>
                        <li>Люблю решать интересные задачи, не смогу спокойно уснуть, пока не найду решение проблемы.</li>
                        <li>Увлекаюсь спортом, книгами, играми и сериалами, в свободное время стараюсь побольше находится на свежем воздухе.</li>
                        <li>Очень общительный человек, всегда найду тему для беседы и потом меня уже не остановить.</li>
                    </ul>
                </div>
                <p>
                    Мне нравится заниматься разработкой, поэтому рад обмениваться знаниями и работать совместно
                    с такими же увлечёнными этим делом любьми.
                </p>
            </div>
            <div className='about-me second'>
                <div className='contact-info'>
                    <a href={hrefLogo?.logoVk}><img className='logo' src={logo_vk} alt='...'/></a>
                    <a href={hrefLogo?.logoDs}><img className='logo' src={logo_ds} alt='...'/></a>
                    <a href={hrefLogo?.logoGit}><img className='logo' src={logo_git} alt='...'/></a>
                    <a href={hrefLogo?.logoGmail}><img className='logo' src={logo_gmail} alt='...'/></a>
                    <a href={hrefLogo?.logoTg}><img className='logo' src={logo_tg} alt='...'/></a>
                </div>
                <div className='photo'>
                    <img className='main-photo' src={photo} alt='...'/>
                </div>
                <div className='main-info'>
                    <h1>Ivan Shavrin<img className='ideas-icon' src={ideas_icon} alt='...'/></h1>
                    <h3>Full-stack developer</h3>
                    <p>I have been programming for more than one year. I develop a backend in python and a frontend in JavaScript (TypeScript)</p>
                </div>
            </div>
        </div>

    );
};

export default Profile;