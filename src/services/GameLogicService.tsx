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
            cameraService.zoomIn(event);
        }
    }

    public checkPcCode(code:number){
        if(code == 1985){
            store.gameProgress.pcUnlocked = true;
            this.updateSolvedRiddles();
            return true;
        } else {
            return false;
        }
    }

    public updateSolvedRiddles(){
        const prevSolvedRiddles = [...store.solvedRiddles];
        prevSolvedRiddles.push(store.currentEvent.name as string);
        store.solvedRiddles = prevSolvedRiddles;
    }
}

export const gameLogicService = new GameLogicService();