import { useState, useEffect, useRef } from "react";

const fixTimeString = (time) => {
    return time < 10 ? `0${time}` : time;
};

const formatTimeToString = (time) => {
    const seconds = time % 60;
    const minutes = Math.floor(time / 60) % 60;
    const hours = 0;

    return `${hours}:${fixTimeString(minutes)}:${fixTimeString(seconds)}`;
};

function Counter() {
    let initValue = 3;
    const [value, setValue] = useState(initValue);
    let ref = useRef(null); // { current: null }

    useEffect(() => {
        const cleanup = () => {
            stopTimer();
        };

        return cleanup;
    }, []);

    const startTimer = () => {
        if (ref.current !== null) return;
        if (value > 0) {
            ref.current = setInterval(() => {
                setValue((prevValue) => {
                    return prevValue - 1;
                });
            }, 1000);
        }
    };

    const stopTimer = () => {
        clearInterval(ref.current);
        ref.current = null;
    };

    const resetTimer = () => {
        stopTimer();
        setValue(initValue);
    };

    if (value == 0)
        stopTimer();

    console.log(ref.current);
    return (
        <>
            <h1>{formatTimeToString(value)}</h1>
            <button onClick={startTimer}>START</button>
            <button onClick={stopTimer}>STOP</button>
            <button onClick={resetTimer}>RESET</button>
        </>
    );
}

export default Counter;

// 1. open yesterday's example

// 2. work on the code;
