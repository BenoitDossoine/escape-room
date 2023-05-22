import {Canvas} from '@react-three/fiber';
import { FlyControls } from '../controls/react-three-fiber/FlyControls';

import DialogBox from './DialogBox';
import { Suspense, useRef } from 'react';
import { Center } from '@react-three/drei';
import { Room } from './Room_v2';

function View(){
    const directionalLight = useRef() as any;
    return(
        <>
            <Canvas>
                <perspectiveCamera position={[0,0,0]}/>
                <Suspense>
                    <directionalLight ref={directionalLight as any} position={[-110,-30,93]} rotation={[0,0,0]} intensity={1}/>
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