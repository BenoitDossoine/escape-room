import { Html } from "@react-three/drei";
import { store } from "../store/store";
import { Circle, Hexagon, Square, Triangle } from "react-feather";
import { useState } from "react";
import { gameLogicService } from "../services/GameLogicService";
import { subscribeKey } from "valtio/utils";

function PcScreen (){
    let [pcUnlocked,setPcUnlocked] = useState(store.gameProgress.pcUnlocked);
    let [disabled,setDisabled] = useState(!store.zoomedIn);

    const unsubscribe = subscribeKey(store, 'zoomedIn', (state)=>{setDisabled(!state); unsubscribe();});

    const passwordInputs: any = document.getElementsByClassName("password-input");

    const sliceInputValue = (e:any) => {
        // Value may not be longer than 4 numbers
        if(e.target.value.length>1){
            e.target.value = e.target.value.slice(0,1);
        }
    }

    const targetNextEmptyInput = (index:number) => {
        for(let i = index + 1; i < 4; i++){
            if(passwordInputs[i].value === ""){
                passwordInputs[i].focus();
                return;
            }
        }
    }

    const checkCode = () => {
        const code = [];
        for(let input of passwordInputs as any){
            if(input.value == ""){
                return;
            }
            code.push(input.value);
        }
        
        if(code.length === 4){
            setPcUnlocked(gameLogicService.checkPcCode(parseInt(code.join(""))));

            if(!store.gameProgress.pcUnlocked){
                for(let input of passwordInputs as any){
                    input.classList.add('wrongAnswer');
                    input.blur();
                }
                // If wrong: empty fields
                const timer = setTimeout(()=>{
                    for(let input of passwordInputs as any){
                        input.classList.remove('wrongAnswer');
                        input.value="";
                    }
                    passwordInputs[0].focus();
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
            zIndexRange={[1,2]}
        >
            {pcUnlocked?
                <div className="success-screen">
                    <img src="./img/flux_capacitor.png" alt="" onClick={()=>console.log("end")}/>
                    <p>timeTravel.exe</p>
                </div>
                :
                <div className="password-screen">
                    <div className="forms">
                        <Triangle/>
                        <Square/>
                        <Circle/>
                        <Hexagon/>
                    </div>
                    <div className="psw-inputs">
                        <input className="password-input" type="number" maxLength={1}
                            onInput={(e:any)=>{
                                sliceInputValue(e);
                                if(e.target.value != ""){
                                    targetNextEmptyInput(0);
                                    checkCode();
                                }
                            }}
                            disabled={disabled}
                            />
                        <input className="password-input" type="number" maxLength={1}
                            onInput={(e:any)=>{
                                sliceInputValue(e);
                                if(e.target.value != ""){
                                    targetNextEmptyInput(1);
                                    checkCode();
                                }
                            }}
                            disabled={disabled}
                            />
                        <input className="password-input" type="number" maxLength={1}
                            onInput={(e:any)=>{
                                sliceInputValue(e);
                                if(e.target.value != ""){
                                    targetNextEmptyInput(2);
                                    checkCode();
                                }
                            }}
                            disabled={disabled}
                            />
                        <input className="password-input" type="number" maxLength={1}
                            onInput={(e:any)=>{
                                sliceInputValue(e);
                                checkCode();
                            }}
                            disabled={disabled}
                        />
                    </div>
                </div>
            }
          </Html>
    );
}

export default PcScreen;