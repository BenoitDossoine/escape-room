import { useSnapshot } from "valtio";
import { store } from "../store/store";

function DialogBox({showDialog}:any){
    const snap = useSnapshot(store);
    const event = snap.currentEvent;
    return(
        <>
            {snap.currentEvent.type === "dialog"
                ?(<div className="dialogBox">
                    <h2 className="dialogTitle">{event.eventData.dialogTitle}</h2>    
                    <div className="dialogContent">
                    <p>{event.eventData.dialogText}</p>
                    </div>
                    <button className="dialogProceedBtn" onClick={()=>store.currentEvent={}}>Proceed</button>
                </div>)
                :null
            }
        </>
    )
}
export default DialogBox;