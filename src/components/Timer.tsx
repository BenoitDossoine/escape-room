import { useEffect, useState } from "react";
import { interval, takeUntil, tap, timer } from "rxjs";

function Timer(){
    const [time,setTime] = useState(0);
    const [timerOn, setTimerOn] = useState(false);


    useEffect(()=>{
        setTimerOn(true);
        const secondsTimer = interval(1000);
        const endTimer = timer(900*1000 + 1);
        
        const seconds = secondsTimer.pipe(
            tap(val => setTime(val+1)),
            takeUntil(
                endTimer.pipe(
                    tap(()=>setTimerOn(false))
                )
            )
        ).subscribe();

        const endTimerSub = endTimer.subscribe(()=>console.log("end"));

        return () => {
            seconds.unsubscribe();
            endTimerSub.unsubscribe();
        }
    },[]);

    const displayTimer = () => {
        const minutes = Math.floor((900-time)/60)<10?"0"+Math.floor((900-time)/60):Math.floor((900-time)/60);
        const seconds = (900-time)%60<10?"0"+(900-time)%60:(900-time)%60;
        return minutes + ":" + seconds;
    }
    return(
        <div className="timer-wrapper">
            <p className="timer">{displayTimer()}</p>
        </div>
    );
}

export default Timer;