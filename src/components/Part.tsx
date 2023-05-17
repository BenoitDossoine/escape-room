import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from 'three';
import { gameLogicService } from "../services/GameLogicService";
import { useRef, useState } from "react";
import { cameraService } from "../services/CameraService";
import { store } from "../store/store";

function Part({child, onClick}:any) {
    const part = child;
    const [zoomedIn, setZoomedIn] = useState(false);
    const [cameraPosition,setCameraPosition] = useState({x: 0,y: 0,z:0})
    const partRef: any = useRef();
    const vec = new THREE.Vector3();

    const handleClick = (e:any) => {
      const event = gameLogicService.handleClickEvent(e);
      cameraService.fixedControls = true;
      
      if(event.type === "zoom"){
          setZoomedIn(true);
          setCameraPosition({x: event.eventData.viewPos[0],y: event.eventData.viewPos[1],z: event.eventData.viewPos[2]});
          document.addEventListener("keydown",zoomOut)
      } else if (event.type === "dialog"){
          store.currentEvent = event;
      }
    }

    const zoomOut = (keyEvent:KeyboardEvent)=> {
      if(keyEvent.key === "Escape"){
        setZoomedIn(false);
        document.removeEventListener("keydown", zoomOut)
      }
    };

    useFrame((state)=>{
      if(zoomedIn){
        state.camera.position.lerp(vec.set(cameraPosition.x,cameraPosition.y,cameraPosition.z),0.01);
        state.camera.updateProjectionMatrix();
      } else if (!zoomedIn){
        state.camera.position.lerp(vec.set(0,0,0),0.01);
        state.camera.updateProjectionMatrix();
      }
      return null;
    })
    
    return (
        <mesh
          key={part.id}
          dispose={null}
        >
          <primitive dispose={null} ref={partRef} object={part} onClick={(e:any)=>handleClick(e)}/>
        </mesh>
      );
}

export default Part;