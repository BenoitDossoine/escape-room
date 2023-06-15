import { useState } from "react";
import { store } from "../store/store";
import { subscribeKey } from "valtio/utils";

function HintSystem(){
    const [currentHint,setCurrentHint] = useState('')
    const unsubscribe = subscribeKey(store, 'currentHint', (state)=>{
        setCurrentHint(state);
        unsubscribe();
    });

    return(
        <div className="hintsContainer movingBackground">
            {store.currentHint?
                <p className="currentHint">{store.currentHint}</p>:
                null
            }
        </div>
    )
}

export default HintSystem;