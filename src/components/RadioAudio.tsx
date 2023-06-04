import {useRef, useState, useEffect, useLayoutEffect} from 'react';
import * as THREE from 'three';

import {useLoader,useThree} from '@react-three/fiber';
import { useSnapshot } from 'valtio';
import { store } from '../store/store';

function RadioAudio(){
    const audio = useRef() as any;
    const {camera} = useThree();
    const [listener] = useState(()=>new THREE.AudioListener());
    const buffer = useLoader(THREE.AudioLoader,'./music/radio.mp3');

    const state = useSnapshot(store);
    const isPlaying = state.radioPlaying;

    useEffect(():any=>{
        if(audio.current){
            audio.current.setBuffer(buffer);
            audio.current.setRefDistance(30);
            audio.current.setLoop(true);
            // audio.current.play();
            isPlaying?audio.current.play():audio.current.pause();

            audio.current.panner.coneInnerAngle = 180;
            audio.current.panner.coneOuterAngle = 230;
            audio.current.panner.coneOuterGain = 0;
            camera.add(listener);
        }
        return () => {
            camera.remove(listener);
        }
    },[isPlaying]);

    useLayoutEffect(()=>{
        return ()=>{
            if(audio.current){
                audio.current.stop();
            }
        }
    },[])

    return <positionalAudio ref={audio} args={[listener]}/>
}

export default RadioAudio;