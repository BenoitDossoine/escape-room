import { store } from "../store/store";
import hints from "../data/hints.json";

class HintService{
    public giveHint(){
        if(store.zoomedIn){
            const event:string = store.currentEvent.name as string;

            if(!store.solvedRiddles.includes(event) && (hints as any)[event]){
                const eventHints = (hints as any)[event].hints;
                store.currentHint = eventHints[0];
            } else {
                store.currentHint = "I can't help you for the moment."
            }
        } else {
            store.currentHint = "I can't help you for the moment."
        }
    }
}

export const hintService = new HintService();