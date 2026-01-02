import "./Stopwatch.css"
import { useState, useEffect, useRef } from "react";
function Stopwatch () {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);

    function formatTime() {
        const seconds = String(time%60).padStart(2, "0");
        const minutes = String(Math.floor((time%3600)/60)).padStart(2, "0");
        const hours = String(Math.floor(time/3600)).padStart(2, "0");
        return `${hours}:${minutes}:${seconds}`;
    }

    useEffect(() => {
        if(isRunning) {
            intervalRef.current = setInterval(() => {
                setTime(time => time+1);
            }, 1000);

            return () => {clearInterval(intervalRef.current);}
        }
    }, [isRunning])

    function start() {
        setIsRunning(true);
    }

    function pause() {
        setIsRunning(false);
    }

    function reset() {
        setIsRunning(false);
        setTime(0);
    }

    return (
        <div className="stopwatch-box">
            <h2>Stopwatch</h2>
            <h1>{formatTime()}</h1>
            <button className="stopwatch-btn" onClick={start}>Start</button>
            <button className="stopwatch-btn" onClick={pause}>Pause</button>
            <button className="stopwatch-btn" onClick={reset}>Reset</button>
        </div>
    )
}

export default Stopwatch;