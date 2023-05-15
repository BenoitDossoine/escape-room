import { useRef } from "react";

function Part({child}:any) {
    const part = child;

    const handleClick = (e:any) => {
        e.stopPropagation();
        console.log(e.eventObject.name);
    }
    
    return (
        <mesh
          key={part.id}
          castShadow
          receiveShadow
        >
          <primitive object={part} onClick={(e:any)=>handleClick(e)}/>
        </mesh>
      );
}

export default Part;