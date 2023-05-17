import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Part from "./Part";
import DialogBox from "./DialogBox";

function Model({onClick}:any):any {
    const object = useLoader(GLTFLoader, './models/room.glb');
    const model = Object.values(object.scene.children);

    const handlePartClick = (gameEvent:any) => {
        onClick(gameEvent);
    }

    return (
        model.map((child) => {
            return (
                <Part key={child.id} child={child} onClick={handlePartClick}/>
            );
        })
    );
}

export default Model;