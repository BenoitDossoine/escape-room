import { Center, Cone, Edges, Float, GradientTexture, Plane, Ring, Tetrahedron, Text, Text3D } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { EffectComposer, SelectiveBloom } from '@react-three/postprocessing'


function Hologram(){
    const mesh:any = useRef();
    const cone: any = useRef();
    const text:any = useRef();


    useFrame(({clock})=>{
        mesh.current.rotation.y = clock.getElapsedTime()/2;
    });
    return(
            <>  
                <Cone args={[0.8,1.2,4]} ref={mesh} scale={1} position={[0,1.5,0]}>
                    <meshStandardMaterial color={'cyan'} transparent={true} opacity={0.45} />
                    <Edges
                        color={'cyan'}
                    >
                    </Edges>
                </Cone>
                <Cone
                    ref={cone}
                    args={[1.9,1,1000]}
                    rotation={[0,0,Math.PI]}
                    scale-y = {1.5}
                    position={[0,1,0]}
                >
                    <meshPhongMaterial transparent={true} emissive={'cyan'} emissiveIntensity={1} toneMapped={false}>
                        <GradientTexture
                            stops={[0,0.1, 1]} // As many stops as you want
                            colors={['rgba(0,100,100,1)','rgba(0,100,100,0.5)','rgba(0,100,100,0)']} // Colors need to match the number of stops
                            size={1024} // Size is optional, default = 1024
                        />
                    </meshPhongMaterial>
                </Cone>
                <Center>
                    <Float
                        speed={5}
                        rotationIntensity={0}
                        floatIntensity={0.5}
                        floatingRange={[2.5,2.7]}
                    >

                        <Text3D
                            ref={text}
                            font="./fonts/futura_heavy_regular.typeface.json"
                            position={[0,2.8,0]}
                            rotation={[0,Math.PI/3+Math.PI-0.1,0]}
                            size={0.6}
                            height={0.05}
                            curveSegments={ 12 }
                            bevelEnabled
                            bevelThickness={ 0.02 }
                            bevelSize={ 0.02 }
                            bevelOffset={ 0 }
                            bevelSegments={ 5 }
                            >
                                1
                                <meshStandardMaterial color={'cyan'}/>
                        </Text3D>
                    </Float>
                </Center>

                <EffectComposer>
                    {/* <SelectiveBloom selection={mesh} mipmapBlur luminanceThreshold={1} luminanceSmoothing={1} /> */}
                    <SelectiveBloom selection={cone} mipmapBlur luminanceThreshold={1} luminanceSmoothing={1} />
                </EffectComposer>
            </>
    );
}

export default Hologram;