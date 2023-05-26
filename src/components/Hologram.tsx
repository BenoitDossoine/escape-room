import { Plane, Ring, Tetrahedron, Text, Text3D } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { EffectComposer, SelectiveBloom } from '@react-three/postprocessing'


function Hologram(){
    const mesh:any = useRef();

    useFrame(({clock})=>{
        const time = clock.getElapsedTime();
        mesh.current.rotation.y = clock.getElapsedTime();
    });
    return(
        <>
            <Tetrahedron ref={mesh} scale={1} position={[0,1,0]}>
                <meshStandardMaterial emissive={'cyan'} transparent={true} opacity={0.1} emissiveIntensity={20} toneMapped={false}/>
                <Text color="orange">1</Text>
            </Tetrahedron>
            <EffectComposer
            >
                <SelectiveBloom selection={mesh} mipmapBlur luminanceThreshold={1} luminanceSmoothing={1} />
            </EffectComposer>
        </>

    );
    
}

export default Hologram;