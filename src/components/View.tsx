import { Center } from '@react-three/drei';
import { FlyControls } from '../controls/react-three-fiber/FlyControls';
import {Canvas, useLoader} from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

function View(){
    const model = useLoader(GLTFLoader, './models/room2.glb');
    return(
        <Canvas camera={{position: [0,0,0]}}>
            <FlyControls/>
            <Center>
                <ambientLight intensity={ 0.4 } />
                <primitive object={model.scene} scale={1} rotation-y={-Math.PI/2}/>    
            </Center>
        </Canvas>
    )
}

export default View;