import {Canvas} from '@react-three/fiber';
import { FlyControls } from '../controls/react-three-fiber/FlyControls';

import DialogBox from './DialogBox';
import { Suspense, useState } from 'react';
import { Center } from '@react-three/drei';
import { Room } from './Room_v2';
import ZoomOutButton from './ZoomOutButton';
import Loader from './Loader';
import End from './End';
import { store } from '../store/store';
import { subscribeKey } from 'valtio/utils';

function View(){
    let [gameEnded,setGameEnded] = useState(store.gameEnded);

    const unsubscribe = subscribeKey(store, 'gameEnded', (state)=>{setGameEnded(state); unsubscribe();});

    return(
        <>
            <Suspense fallback={<Loader/>}>
                {!gameEnded?
                    <Canvas>
                        <perspectiveCamera position={[0,0,0]} rotation={[0,0,0]}/>
                            <pointLight name="mainLight" intensity={0.35} position={[0,150,0]}></pointLight>
                            <FlyControls/>
                            <Center>
                                <Room/>
                            </Center>
                    </Canvas>:
                    <Canvas>
                    <perspectiveCamera position={[0,0,0]} rotation={[0,0,0]}/>
                        <ambientLight/>
                        <pointLight name="mainLight" intensity={0.35} position={[0,150,0]}></pointLight>
                        <FlyControls/>
                        <Center>
                            <End/>
                        </Center>
                    </Canvas>
                }
            </Suspense>
            <DialogBox/>
            <ZoomOutButton/>
        </>
    )
}

export default View;