import { useSnapshot } from "valtio";
import { store } from "../store/store";

function DialogBox({showDialog}:any){
    const snap = useSnapshot(store);
    const event = snap.currentEvent;
    return(
        <>
            {snap.currentEvent.type === "dialog"
                ?(
                    <div className="dialogBoxContainer">
                        <div className="dialogBox movingBackground">
                            <div className="dialogContent">
                                <h2 className="dialogTitle">{event.eventData.dialogTitle}</h2>
                                <div className="dialogContent">
                                <p>{event.eventData.dialogText}</p>
                                </div>
                                <button className="dialogProceedBtn" onClick={()=>store.currentEvent={}}> &gt; Proceed</button>
                            </div>
                        </div>
                    </div>
                )
                :null
            }
        </>
    )
}
export default DialogBox;