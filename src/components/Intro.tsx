import { useEffect, useRef, useState } from 'react';
import Typewriter from 'typewriter-effect';
import {motion} from 'framer-motion';

function Intro(props:any){
    let [inputVisible,setInputVisible] = useState(false);
    const introInput = useRef(null);

    let [timerVisible,setTimerVisible] = useState(false);

    let [helpVisible,setHelpVisible] = useState(false);

    let [briefingVisible, setBriefingVisible] = useState(false);
    
    let [startVisible, setStartVisible] = useState(false);
    
    /**
     * Function to make the container scroll to the bottom, so that the lowest container is always visible
     *
     */
    const updateScroll = () => {
        var element = document.getElementsByClassName("introContainer")[0];
        element.scrollTop = element.scrollHeight;
    }

    useEffect(()=>{
        if(introInput.current){
            const input = introInput.current as HTMLInputElement;
            input.focus();
        }
    },[introInput])
    
    return(
        <>
            {timerVisible?
                <motion.div
                    className="timer-wrapper"
                    initial={{scale:1, x:"-50%", y:"0"}}
                    animate={{scale: 1, y:"-100%"}}
                    style={{zIndex:0}}
                >
                    <p className="timer">15:00</p>
                </motion.div>:
                null
            }
            {helpVisible?
                <motion.button
                    className="help-button frame-button"
                    initial={{scale:0, opacity:0}}
                    animate={{scale:1, opacity:1}}
                    transition={{type: "spring"}}
                >
                    <motion.p
                        initial={{rotateY:0}}
                        animate={{rotateY:359}}
                        transition={{ repeat: Infinity, duration: 2 }}
                    >?</motion.p>
                </motion.button>:
                null
            }
            <div className='introContainer'>
                <div className="promptTextContainer">
                    <Typewriter
                            onInit={(typewriter) => {
                                typewriter.typeString(' Welcome, agent #16486. Are you ready to start? (Y/N)')
                                .pauseFor(1000)
                                .callFunction(() => {
                                    setInputVisible(true);
                                })
                                .start();
                            }}
                            options={{
                                cursor: '',
                                delay: 0
                            }}
                    />
                </div>
                <div className='promptTextContainer'>
                    {inputVisible?
                    <span className='promptText'>
                        <input 
                        ref={introInput}
                        autoFocus type="text" maxLength={1} className="introInput"
                        onInput={(e:any)=>{
                            if(e.target.value === "Y" || e.target.value === "y"){
                                document.addEventListener("keydown", (event:any)=>{
                                    setBriefingVisible(true);
                                    document.removeEventListener("keydown",(event)=>setBriefingVisible(true));
                                })
                            } else {
                                document.addEventListener("keydown", (event)=>{
                                    e.target.value = "";
                                })
                            }
                        }}
                        ></input>
                    </span>:
                    null
                    }
                </div>
                {briefingVisible?
                    <div className="promptTextContainer">
                        <Typewriter
                                onInit={(typewriter) => {
                                    typewriter.typeString("Great, we're ready! Thank you for arriving this quickly, agent. <br><br>")
                                    .pauseFor(1000)
                                    .typeString("As a student at the academy of the Time Investigation Agency, you probably heard the rumors. <br>")
                                    .typeString("We can indeed confirm that one of our former agents, agent #00666, has betrayed us. <br>")
                                    .typeString("We don't know what he's planned, but it can't be anything good. <br><br>")
                                    .typeString("One of our sources tells us that all the answers to his plans can be found in the time he was a student at the academy himself.<br>")
                                    .typeString("Now, it turns out that he and you have something in common: your dorm room was once his! <br>")
                                    .typeString("Since you know the environment well, it will be your mission to go back in time to find out what that traitor has planned! <br>")
                                    .typeString("<br>")
                                    .callFunction(()=>updateScroll())
                                    .typeString("We have installed the latest version of our time-travel program on your personal computer. It's waiting for you in your dorm.<br>")
                                    .callFunction(()=>updateScroll())
                                    .typeString("Since you're a student, you're still a ... liabilty. That's why your pc is locked. Prove to us you're the agent for this job by unlocking it!<br>")
                                    .callFunction(()=>updateScroll())
                                    .typeString("<br>")
                                    .callFunction(()=>updateScroll())
                                    .typeString("We'll be in contact once you achieve this.<br>")
                                    .typeString("<br>")
                                    .callFunction(()=>updateScroll())
                                    .pauseFor(1000)
                                    .typeString("If we can believe our calculations, you have 15 minutes to make the time jump, after which it will be too late.<br>")
                                    .callFunction(()=>updateScroll())
                                    .typeString("The Operations department has provided you with a timer, that should appear ")
                                    .callFunction(()=>updateScroll())
                                    .callFunction(()=>setTimerVisible(true))
                                    .callFunction(()=>updateScroll())
                                    .typeString("now. Keep an eye on it!<br>")
                                    .callFunction(()=>updateScroll())
                                    .typeString("<br>")
                                    .pauseFor(2500)
                                    .callFunction(()=>updateScroll())
                                    .typeString("Should you have questions, you can always request some information via this ")
                                    .callFunction(()=>setHelpVisible(true))
                                    .callFunction(()=>updateScroll())
                                    .typeString("button.<br>")
                                    .pauseFor(1000)
                                    .callFunction(()=>updateScroll())
                                    .typeString("Information will be scarce, but we have faith you won't need this tool.<br><br>")
                                    .callFunction(()=>updateScroll())
                                    .typeString("Do you accept your mission, agent? (Y/N)")
                                    .callFunction(() => {
                                        setStartVisible(true);
                                    })
                                    .callFunction(()=>updateScroll())
                                    .start();
                                }}
                                options={{
                                    cursor: '',
                                    delay: 30
                                }}
                            />
                    </div>:
                    null
                }
                <div className='promptTextContainer'>
                    {startVisible?
                    <span className='promptText'>
                        <input type="text" autoFocus maxLength={1} className="introInput startInput" 
                            onInput={(e:any)=>{
                            if(e.target.value === "Y" || e.target.value === "y"){
                                document.addEventListener("keydown", (event)=>{
                                    if(event.code === "Enter"){
                                        props.startGame();
                                        document.removeEventListener("keydown",(event)=>props.startGame());
                                    }
                                })
                            } else {
                                document.addEventListener("keydown", (event)=>{
                                    if(event.code === "Enter"){
                                        e.target.value = "";
                                        document.removeEventListener("keydown",(event)=>e.target.value = "");
                                    }
                                })
                            }
                        }}
                        ></input>
                    </span>:
                    null
                    }
                </div>
            </div>
        </>
        );
}

export default Intro;