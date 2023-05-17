import {proxy} from 'valtio';

type Event = {
    type?: string,
    eventData?: any
}

export const store = proxy<{currentEvent:Event}>({
    currentEvent: {
    }
})