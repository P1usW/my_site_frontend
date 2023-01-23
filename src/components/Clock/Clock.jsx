import React, {useEffect, useRef} from 'react';
import setDate from "./setDateFunc";
import '../style/Clock.css'

const Clock = () => {
    const sec = useRef();
    const min = useRef();
    const hour = useRef();

    useEffect(() => {
        const secArrow = sec.current;
        const minArrow = min.current;
        const hourArrow = hour.current;
        let intervalId = setInterval(setDate, 1000, secArrow, minArrow, hourArrow);

        return () => {
            clearInterval(intervalId);
        }
    }, []);

    return (
        <div className='back-clock'>
            <div className='clock'>
                <div className='point'></div>
                <div className='sec' ref={sec}></div>
                <div className='min' ref={min}></div>
                <div className='hour' ref={hour}></div>
                <p className='clock-1'>1</p>
                <p className='clock-2'>2</p>
                <p className='clock-3'>3</p>
                <p className='clock-4'>4</p>
                <p className='clock-5'>5</p>
                <p className='clock-6'>6</p>
                <p className='clock-7'>7</p>
                <p className='clock-8'>8</p>
                <p className='clock-9'>9</p>
                <p className='clock-10'>10</p>
                <p className='clock-11'>11</p>
                <p className='clock-12'>12</p>
            </div>
        </div>

    );
};

export default Clock;