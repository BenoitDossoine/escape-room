import { Html } from "@react-three/drei";
import { store } from "../store/store";
import { Circle, Hexagon, Square, Triangle } from "react-feather";
import { useEffect, useState } from "react";
import { gameLogicService } from "../services/GameLogicService";
import { subscribeKey } from "valtio/utils";

function PcScreen (){
    let [pcUnlocked,setPcUnlocked] = useState(store.gameProgress.pcUnlocked);
    let [disabled,setDisabled] = useState(!store.zoomedIn);

    const unsubscribe = subscribeKey(store, 'zoomedIn', (state)=>{setDisabled(!state)});

    const checkAnswer = (e:any) => {
        // Only check when all 4 numbers are in the input field
        if(e.target.value.length === 4){
            setPcUnlocked(gameLogicService.checkPcCode(e.target.value));
            if(!pcUnlocked){
                e.target.style.color = "red";
                // If wrong: empty field
                const timer = setTimeout(()=>{
                    e.target.value = "";
                    e.target.style.color = "#FD7E25";
                    clearTimeout(timer);
                }, 500);
            }
        }
    }

    return(
        <Html
            as='div'
            className='screen'
            center
            transform
            rotation-z = {Math.PI/2}
            rotation-y = {Math.PI/2.23}
            distanceFactor={1}
        >
            {pcUnlocked?
                <div className="success-screen">
                    <img src="./img/flux_capacitor.png" alt="" />
                    <p style={{color:"orange"}}>timeTravel.exe</p>
                </div>
                :
                <div className="password-screen">
                    <div className="forms">
                        <Triangle/>
                        <Hexagon/>
                        <Circle/>
                        <Square/>
                    </div>
                    <input 
                        type="number"
                        maxLength={4} 
                        pattern="\d*"
                        className='screenInput'
                        autoComplete="off"
                        onChange={(e)=>checkAnswer(e)}
                        onInput={(e:any)=>{
                            // Value may not be longer than 4 numbers
                            if(e.target.value.length>4){
                                e.target.value = e.target.value.slice(0,4);
                            }
                        }}
                        disabled={disabled}
                    />
                </div>
            }
          </Html>
    );
}

export default PcScreen;