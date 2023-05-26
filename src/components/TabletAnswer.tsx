import { Dodecahedron, Octahedron, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function TabletAnswer(){

    const mesh:any = useRef();

    useFrame(({clock})=>{
        const time = clock.getElapsedTime();
        // mesh.current.rotation.z = clock.getElapsedTime();
        // mesh.current.rotation.x = clock.getElapsedTime();
        mesh.current.rotation.y = clock.getElapsedTime();
    });

    return(
            // <axesHelper position={[-107.96, 87, 36.65]} rotation={[Math.PI, 0,0]}>
        <Octahedron ref={mesh} scale={5} position={[-107.96, 87, 36.65]} rotation={[-Math.PI, 0, -Math.PI]} args={[1,1]}>
            <meshStandardMaterial color={'cyan'} transparent={true} opacity={0.7}/>
            <Text color="orange">1</Text>
        </Octahedron>
            // </axesHelper>
    );
}

export default TabletAnswer;