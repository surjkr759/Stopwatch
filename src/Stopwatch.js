import "./Stopwatch.css"
import { useState, useEffect } from "react";
function Stopwatch () {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);

    useEffect(() => {
        let timerId = setTimeout(() => {
            setSeconds(seconds+1);
            if(seconds===59) {
                setSeconds(0);
                setMinutes(minutes+1);
                if(minutes===59) {
                    setMinutes(0);
                    setHours(hours+1);
                }
            }
        }, 1000);
        return () => {clearTimeout(timerId);}
        
    }, [seconds, minutes, hours]);

    return (
        <div className="stopwatch-box">
            <h1>Stopwatch</h1>
            <h2 className="stopwatch">{hours}:{minutes}:{seconds}</h2>
        </div>
    )
}

export default Stopwatch;