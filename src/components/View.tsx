import {Canvas} from '@react-three/fiber';
import { FlyControls } from '../controls/react-three-fiber/FlyControls';

import DialogBox from './DialogBox';
import { Suspense } from 'react';
import { Center } from '@react-three/drei';
import { Room } from './Room_v2';

function View(){
    return(
        <>
            <Canvas>
                <perspectiveCamera position={[0,0,0]}/>
            <Suspense>   
                <FlyControls/>
                <Center>
                    <Room></Room>
                    <ambientLight intensity={ 0.4 } />
                </Center>
            </Suspense>
            </Canvas>
            <DialogBox/>
        </>
    )
}

export default View;