import React, {useEffect} from 'react';
import {useState} from "react";
import '../style/RunningText.css'

const RunningText = () => {
    const [text, setText] = useState('');

    function linearTiming(timeFraction) {
        return timeFraction
    }

    function animate(draw, timing = linearTiming, duration = 7000) {
        let start = performance.now();

        requestAnimationFrame(function animate(time) {
            let timeFraction = (time - start) / duration;
            if (timeFraction > 1) timeFraction = 1;

            let progress = timing(timeFraction);

            draw(progress);

            if (timeFraction < 1) {
                requestAnimationFrame(animate)
            }
        })
    }

    function animateText () {
        const initText = 'Приветствую, путник! Добро пожаловать на мой скромный сайт, если ты попал сюда, ' +
            'значит у тебя есть вопросы? Надеюсь ты сможешь найти тут ответы, а если нет, ' +
            'смело задавай вопрос нажав на кнопочку снизу.';

        let to = initText.length;
        let from = 0;

        animate((progress) => {
            let result = (to - from) * progress + from;
            setText(initText.slice(0, Math.ceil(result)))
        });
    }

    useEffect(() =>{
        animateText();
    }, [])

    return (
        <div className='run-text-cont'>
            <p className='run-text'>{text}</p>
        </div>

    );
};

export default RunningText;