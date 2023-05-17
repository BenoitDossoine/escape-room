import { useState } from "react";
import { useSnapshot } from "valtio";
import { store } from "../store/store";

function DialogBox({showDialog}:any){
    const snap = useSnapshot(store);
    return(
        <>
            {snap.currentEvent.type === "dialog"
                ?(<div className="dialogBox">
                    <h2 className="dialogTitle">Item found!</h2>    
                    <div className="dialogContent">
                    <p>You found this item!</p>
                    </div>
                    <button className="dialogProceedBtn" onClick={()=>store.currentEvent={}}>Proceed</button>
                </div>)
                :null
        }
        </>
    )
}
export default DialogBox;