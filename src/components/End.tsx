import { Center, Effects, Environment, Float, Plane, Text3D } from "@react-three/drei";
import { Canvas, extend, useThree } from "@react-three/fiber";
import { EffectComposer, SelectiveBloom, Scanline, Glitch, Bloom } from "@react-three/postprocessing";
import { BlendFunction, GlitchMode } from "postprocessing";
import { useEffect, useRef } from "react";



function End(props:any){
    const state = useThree();
    console.log(state.camera);
    useEffect(()=>{
        state.camera.position.set(0,0,60);
        state.camera.rotation.set(0,0,0);
    })
    return(
        <>
            <Float
                speed={1} // Animation speed, defaults to 1
                rotationIntensity={0.2} // XYZ rotation intensity, defaults to 1
                floatIntensity={0.5} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
                floatingRange={[-1, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
            >
                <Text3D position={[0,-10,0]} scale={10} font={"./fonts/futura_heavy_regular.typeface.json"}>
                    To be continued...
                    <meshStandardMaterial emissive={'#FD7E25'} emissiveIntensity={3} toneMapped={false}/>
                </Text3D>
            </Float>
            <EffectComposer>
                <Scanline blendFunction={BlendFunction.DARKEN} density={5} opacity={0.99}/>
                <Bloom intensity={1.0} luminanceThreshold={1}/>
                <Glitch
                    delay={[2, 10] as any} // min and max glitch delay
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