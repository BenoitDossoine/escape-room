import { Html, Plane } from "@react-three/drei";
import PatternGame from "./PatternGame";

import { store } from "../store/store";
import { subscribeKey } from "valtio/utils";
import { useState } from "react";
import TabletAnswer from "./TabletAnswer";

function Tablet(){
    let [visible,setVisible] = useState(store.zoomedIn);
    let [tabletUnlocked,setTabletUnlocked] = useState(store.gameProgress.tabletUnlocked);

    const unsubscribe = subscribeKey(store, 'zoomedIn', (state)=>{setVisible(state)});


    return(
        <>
            {!tabletUnlocked?
                <Plane scale={10} args={[1.5,1.5]} rotation={[0, Math.PI/3.45, 0]} position={[-107.96, 85, 36.65]} visible={visible}>
                    <meshStandardMaterial color={'cyan'} transparent={true} opacity={0.7}/>
                    <Html
                    as='div'
                    className='tablet'
                    center
                    transform
                    distanceFactor={1}
                    visible={visible}
                    >
                        <PatternGame unlockTablet={()=>setTabletUnlocked(true)}></PatternGame>
                    </Html>
                </Plane>
                :
                <TabletAnswer/>
            }
        </>
    );
}

export default Tablet;