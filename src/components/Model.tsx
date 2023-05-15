import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Part from "./Part";

function Model():any {
    const object = useLoader(GLTFLoader, './models/room.glb');
    const model = Object.values(object.scene.children);

    return (
        model.map((child) => {
            return (
                <Part key={child.id} child={child}/>
            );
        })
    );
}

export default Model;