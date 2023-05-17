import gameAssets from '../data/gameAssets.json';
import { cameraService } from "./CameraService";

class GameLogicService{
    public handleClickEvent(e:any){
        e.stopPropagation();
        const tag = `${e.eventObject.name}`;
        const event = (gameAssets as any)[tag];
        
        return event;
    }
}

export const gameLogicService = new GameLogicService();