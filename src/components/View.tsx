import {Canvas} from '@react-three/fiber';
import { FlyControls } from '../controls/react-three-fiber/FlyControls';

import DialogBox from './DialogBox';
import { Suspense, useRef } from 'react';
import { Center } from '@react-three/drei';
import { Room } from './Room_v2';
import ZoomOutButton from './ZoomOutButton';
import Loader from './Loader';
import End from './End';

function View(){
    const directionalLight = useRef() as any;
    const pointLight = useRef() as any;
    return(
        <>
            <Suspense fallback={<Loader/>}>
                <Canvas>
                    <perspectiveCamera position={[0,0,0]}/>
                        <pointLight intensity={0.35} position={[0,150,0]}></pointLight>
                        {/* <directionalLight ref={directionalLight as any} position={[-110,-30,93]} rotation={[0,0,0]} intensity={1}/> */}
                        <FlyControls/>
                        <Center>
                            <Room></Room>
                        </Center>
                </Canvas>
            </Suspense>
            <DialogBox/>
            <ZoomOutButton/>
        </>
    )
}

export default View;