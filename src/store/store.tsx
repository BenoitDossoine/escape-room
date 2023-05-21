import {proxy} from 'valtio';

type Event = {
    type?: string,
    eventData?: any
}

type CameraPosition = {
    x: number,
    y: number,
    z: number
}

type CameraRotation = {
    x: number,
    y: number,
    z: number
}



export const store = proxy<{zoomedIn: Boolean, cameraPosition: CameraPosition, cameraRotation:CameraRotation, currentEvent:Event}>({
    zoomedIn: false,
    cameraPosition: {x:0,y:0,z:0},
    cameraRotation: {x:0,y:0,z:0},
    currentEvent: {
    }
})