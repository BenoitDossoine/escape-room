import {useRef, useState, useEffect, useLayoutEffect} from 'react';
import * as THREE from 'three';

import {useLoader,useThree} from '@react-three/fiber';

function SpeakerAudio(props:any){
    const audio = useRef() as any;
    const {camera} = useThree();
    const [listener] = useState(()=>new THREE.AudioListener());
    const buffer = useLoader(THREE.AudioLoader,'./music/buildup.mp3');

    useEffect(():any=>{
        if(audio.current){
            audio.current.setBuffer(buffer);
            audio.current.setRefDistance(10);
            audio.current.setLoop(false);

            camera.add(listener);
        }
        return () => {
            camera.remove(listener);
        }
    },[]);

    useLayoutEffect(()=>{
        return ()=>{
            if(audio.current){
                audio.current.stop();
            }
        }
    },[])

    return (
        props.position == "right"?
            <positionalAudio ref={audio} args={[listener]}/>:
            <positionalAudio ref={audio} args={[listener]}/>
    );
}

export default SpeakerAudio;