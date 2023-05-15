import { Center } from '@react-three/drei';
import { FlyControls } from '../controls/react-three-fiber/FlyControls';
import {Canvas, useLoader} from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import Part from './Part';
import Model from './Model';

function View(){
    const object = useLoader(GLTFLoader, './models/room.glb');
    return(
        <Canvas camera={{position: [0,0,0]}}>
            <FlyControls/>
            <Center>
                <Model/>
                <ambientLight intensity={ 0.4 } />
            </Center>
        </Canvas>
    )
}

export default View;