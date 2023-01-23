import React, {useEffect, useRef} from 'react';
import Animate from "./WaveScript";
import './Wave.css'

const Wave = () => {
    const canvas = useRef();

    useEffect(() => {
        const a = new Animate(canvas.current);
        a.init();
        return () => {
            a.unmount();
        }
    }, [])

    return (
        <>
            <canvas ref={canvas} width='0' height='0' id='cnv'/>
        </>
    );
};

export default Wave;