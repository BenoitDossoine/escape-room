import * as THREE from 'three';
import { store } from '../store/store';

class CameraService{
    public zoomIn = (event:any) => {
        store.zoomedIn = true;
        store.cameraPosition = {x: event.eventData.viewPos.x,y: event.eventData.viewPos.y,z: event.eventData.viewPos.z};
        store.cameraRotation = {x: event.eventData.viewRot.x,y: event.eventData.viewRot.y,z: event.eventData.viewRot.z};

        document.addEventListener("keydown",this.zoomOut)
    }

    public zoomOut = (keyEvent: KeyboardEvent) => {
        if(keyEvent.key === "Escape"){
            store.zoomedIn = false;
            store.hintsOpen = false;
            document.removeEventListener("keydown", this.zoomOut);
        }
    }
}

export const cameraService = new CameraService();