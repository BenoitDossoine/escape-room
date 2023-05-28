import { Box, Cone, Edges, Text3D, Text, GradientTexture, Center, Float } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { EffectComposer, SelectiveBloom } from '@react-three/postprocessing'

function TabletAnswer(){

    const mesh:any = useRef();
    const text:any = useRef();
    const cone:any = useRef();

    useFrame(({clock})=>{
        const time = clock.getElapsedTime();
        mesh.current.rotation.y = clock.getElapsedTime();
    });

    return(
        <>
            <Box ref={mesh} scale={5} position={[-107.96, 85, 36.65]} rotation={[-Math.PI, 0, -Math.PI]} args={[1,1]}>
                <meshStandardMaterial emissive={'cyan'} transparent={true} opacity={0.1} emissiveIntensity={5} toneMapped={false}/>
                <Edges
                    color={'cyan'}
                ></Edges>
            </Box>
            <Cone
                ref={cone}
                args={[1.9,1,1000]}
                rotation={[0,0,Math.PI]}
                scale-y = {10}
                scale={5}
                position={[-107.96, 80, 36.65]}
            >
                <meshPhongMaterial transparent={true} emissive={'cyan'} emissiveIntensity={1} toneMapped={false}>
                    <GradientTexture
                        stops={[0,0.1, 1]} // As many stops as you want
                        colors={['rgba(0,100,100,1)','rgba(0,100,100,0.5)','rgba(0,100,100,0)']} // Colors need to match the number of stops
                        size={1024} // Size is optional, default = 1024
                    />
                </meshPhongMaterial>
            </Cone>
            <Center position={[-107.96, 85, 36.65]}>
                <Float
                    speed={5}
                    rotationIntensity={0}
                    floatIntensity={1}
                >
                    <Text3D
                        ref={text}
                        font="./fonts/futura_heavy_regular.typeface.json"
                        position={[-107.96, 85, 36.65]}
                        rotation={[0,Math.PI/3-0.1,0]}
                        size={4}
                        height={0.05}
                        curveSegments={ 12 }
                        bevelEnabled
                        bevelThickness={ 0.02 }
                        bevelSize={ 0.02 }
                        bevelOffset={ 0 }
                        bevelSegments={ 5 }
                        >
                            9
                            <meshStandardMaterial color={'cyan'}/>
                    </Text3D>
                </Float>
            </Center>
            <EffectComposer>
                <SelectiveBloom selection={mesh} mipmapBlur luminanceThreshold={1} luminanceSmoothing={1} />
            </EffectComposer>
        </>
    );
}

export default TabletAnswer;