import gameAssets from '../data/gameAssets.json';
import { store } from '../store/store';
import { cameraService } from "./CameraService";

class GameLogicService{
    public handleClickEvent(e:any){
        e.stopPropagation();
        const tag = `${e.eventObject.name}`;
        const event = (gameAssets as any)[tag];
        store.currentEvent = event;

        if(event.type === "zoom" && !store.zoomedIn){
            store.zoomedIn = true;
            store.cameraPosition = {x: event.eventData.viewPos.x,y: event.eventData.viewPos.y,z: event.eventData.viewPos.z};
            store.cameraRotation = {x: event.eventData.viewRot.x,y: event.eventData.viewRot.y,z: event.eventData.viewRot.z};
        }
    }
}

export const gameLogicService = new GameLogicService();