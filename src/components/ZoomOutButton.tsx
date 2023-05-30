import { ArrowLeft } from "react-feather";
import { store } from "../store/store";
import { useSnapshot } from "valtio";
import { cameraService } from "../services/CameraService";

function ZoomOutButton(){
    const snap = useSnapshot(store);
    const zoomedIn = snap.zoomedIn;
    return(
        <>
            {zoomedIn?
                <div className="zoomOutButtonContainer">
                    <button className="zoomOutButton" onClick={()=>cameraService.zoomOut()}>
                        <ArrowLeft size={48}/>
                    </button>
                </div>:
                null
            }
        </>
    )
}

export default ZoomOutButton;