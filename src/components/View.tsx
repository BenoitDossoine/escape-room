import {Canvas} from '@react-three/fiber';
import { FlyControls } from '../controls/react-three-fiber/FlyControls';

import DialogBox from './DialogBox';
import { Suspense, useRef } from 'react';
import { Center } from '@react-three/drei';
import { Room } from './Room_v2';
import ZoomOutButton from './ZoomOutButton';
import Loader from './Loader';

function View(){
    const directionalLight = useRef() as any;
    const pointLight = useRef() as any;
    return(
        <>
            <Suspense fallback={<Loader/>}>
                <Canvas>
                    <perspectiveCamera position={[0,0,0]}/>
                        <pointLight intensity={0.5}></pointLight>
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