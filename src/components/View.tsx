import {Canvas} from '@react-three/fiber';
import { FlyControls } from '../controls/react-three-fiber/FlyControls';

import DialogBox from './DialogBox';
import { Suspense, useRef } from 'react';
import { Center } from '@react-three/drei';
import { Room } from './Room_v2';
import ZoomOutButton from './ZoomOutButton';

function View(){
    const directionalLight = useRef() as any;
    return(
        <>
            <Canvas>
                <perspectiveCamera position={[0,0,0]}/>
                <Suspense>
                    <pointLight intensity={0.5}></pointLight>
                    {/* <directionalLight ref={directionalLight as any} position={[-110,-30,93]} rotation={[0,0,0]} intensity={1}/> */}
                    <FlyControls/>
                    <Center>
                        <Room></Room>
                    </Center>
                </Suspense>
            </Canvas>
            <DialogBox/>
            <ZoomOutButton/>
        </>
    )
}

export default View;