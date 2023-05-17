import {proxy} from 'valtio';

type Event = {
    type?: string,
    eventData?: any
}



export const store = proxy<{zoomedIn: Boolean,currentEvent:Event}>({
    zoomedIn: false,
    currentEvent: {
    }
})