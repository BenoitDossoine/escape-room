import { Effects, Environment, Plane } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import { EffectComposer, SelectiveBloom, Scanline, Glitch } from "@react-three/postprocessing";
import { BlendFunction, GlitchMode } from "postprocessing";
import { useRef } from "react";



function End(props:any){

    const plane = useRef() as any;

    return(
        <>
            <mesh ref={plane} scale={[8,4.5,1]} position={[0,2,0]} rotation={[0,0,0]}>
                <planeBufferGeometry />
                {/* <meshStandardMaterial color={'cyan'}/> */}
                <meshPhongMaterial transparent={true} opacity={1} emissive={'cyan'} emissiveIntensity={20} toneMapped={false}></meshPhongMaterial>

            </mesh>
            <EffectComposer>
                <Scanline blendFunction={BlendFunction.DARKEN} density={1} opacity={0.99}/>
                <SelectiveBloom selection={plane} intensity={1.0} luminanceThreshold={1}/>
                <Glitch
                    delay={[10, 16] as any} // min and max glitch delay
                    duration={[0.6, 1.0] as any} // min and max glitch duration
                    strength={[0.1, 0.2] as any} // min and max glitch strength
                    mode={GlitchMode.SPORADIC} // glitch mode
                    active // turn on/off the effect (switches between "mode" prop and GlitchMode.DISABLED)
                    ratio={1} // Threshold for strong glitches, 0 - no weak glitches, 1 - no strong glitches.
                ></Glitch>
            </EffectComposer>

        </>
    );
}

export default End;