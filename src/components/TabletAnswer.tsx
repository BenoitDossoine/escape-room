import { Octahedron, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { EffectComposer, SelectiveBloom } from '@react-three/postprocessing'

function TabletAnswer(){

    const mesh:any = useRef();

    useFrame(({clock})=>{
        const time = clock.getElapsedTime();
        mesh.current.rotation.y = clock.getElapsedTime();
    });

    return(
        <>
            <Octahedron ref={mesh} scale={5} position={[-107.96, 87, 36.65]} rotation={[-Math.PI, 0, -Math.PI]} args={[1,1]}>
                    <meshStandardMaterial emissive={'cyan'} transparent={true} opacity={0.3} emissiveIntensity={5} toneMapped={false}/>
                    <Text color="orange">1</Text>
            </Octahedron>
            <EffectComposer
            >
                <SelectiveBloom selection={mesh} mipmapBlur luminanceThreshold={1} luminanceSmoothing={1} />
            </EffectComposer>
        </>
            // </axesHelper>
    );
}

export default TabletAnswer;