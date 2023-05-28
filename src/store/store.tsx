import {proxy} from 'valtio';

type Event = {
    name?: string,
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

type GameProgress = {
    pcUnlocked: boolean,
    tabletUnlocked: boolean,
    hologramActivated: boolean
}


export const store = proxy<{
    zoomedIn: boolean,
    cameraPosition: CameraPosition,
    cameraRotation:CameraRotation,
    currentEvent:Event,
    gameProgress: GameProgress,
    solvedRiddles: string[],
    currentHint: string,
    hintsOpen: boolean
}>
({
    zoomedIn: false,
    cameraPosition: {x:0,y:0,z:0},
    cameraRotation: {x:0,y:0,z:0},
    currentEvent: {
    },
    gameProgress: {
        pcUnlocked: false,
        tabletUnlocked: false,
        hologramActivated: false
    },
    solvedRiddles: [],
    currentHint: '',
    hintsOpen: false,
})