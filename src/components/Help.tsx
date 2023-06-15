import { useState } from "react";
import { hintService } from "../services/HintService";
import HintSystem from "./HintSystem";
import { store } from "../store/store";
import { subscribeKey } from "valtio/utils";
import {motion} from 'framer-motion';

function Help(){
    const [open,setOpen] = useState(store.hintsOpen);
    const unsubscribe = subscribeKey(store, 'hintsOpen', (state)=>{
        setOpen(state);
        unsubscribe();
    });
    
    const handleClick = () => {
        store.hintsOpen = !open;
        hintService.giveHint();
    }

    return(
        <>
            <button className="help-button frame-button" onClick={handleClick}>
                <motion.p
                    whileHover={{
                        rotateY: 359,
                        transition: { 
                            duration: 1,
                            repeat: Infinity
                        },
                    }}
                >
                    ?
                </motion.p>
            </button>
            {open?
                <HintSystem/>:
                null
            }
        </>
    )
}

export default Help;