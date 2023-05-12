import { FirstPersonControls, Center } from '@react-three/drei';
import { FlyControls } from '../controls/react-three-fiber/FlyControls';
import {Canvas, useLoader} from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

function View(){

    const model = useLoader(GLTFLoader, './models/room2.glb');
    console.log(model);
    return(
        <Canvas>
            {/* <FirstPersonControls
                enabled={true}
                activeLook={true}
                movementSpeed={0}
                lookSpeed={0.1}
                // constrainVertical={true}
                // verticalMin={Math.PI}
                // verticalMax={Math.PI/2}
            ></FirstPersonControls> */}
            <FlyControls/>
            <Center>
                <ambientLight intensity={ 0.2 } />
                <primitive object={model.scene} scale={1.2} position-y={-0.7} position-z={12} position-x={4} rotation-y={-Math.PI/2}/>    
            </Center>
        </Canvas>
    )
}

export default View;