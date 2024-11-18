import { useEffect, useState } from 'react';
import styles from './Timer.module.scss'

export function Timer({ reset, minutes, seconds, playing }) {
    const [currentMinute, setCurrentMinute] = useState(minutes);
    const [currentSecond, setCurrentSecond] = useState(seconds);

    useEffect(() => {
        

        if (playing) {
            let myInterval = setInterval(() => {
                if (currentSecond > 0) setCurrentSecond(currentSecond - 1);
                if (currentSecond === 0) {
                    if (currentMinute === 0) {
                        clearInterval(myInterval);
                    } else {
                        setCurrentMinute(currentMinute - 1);
                        setCurrentSecond(59);
                    }
                }
            }, 1000)
            return () => {
                clearInterval(myInterval);
            }
        }
    });

    return (
        <div className={styles.TimerText}>
            { currentMinute === 0 && currentSecond === 0
                ? <p>0:00</p>
                : <p> {currentMinute}:{currentSecond < 10 ?  `${currentSecond}0` : currentSecond}</p>
            }
        </div>
    )
}