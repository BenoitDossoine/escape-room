import { useState } from "react";
import { immersionService } from "../services/ImmersionService";
import Help from "./Help";
import Intro from "./Intro";
import Inventory from "./Inventory";
import Timer from "./Timer";
import View from "./View";

function Frame(){
  const [started,setStarted] = useState(true);

  return(
    <div className="frame-wrapper">
      <div className="frame">
        {!started?
          <Intro 
            startGame={()=>{
              console.log("hello!")
              setStarted(true);
              immersionService.playBackgroundAudio();
              // immersionService.setFullScreen();
            }}
          />:
          <>
            <View></View>
            <Timer></Timer>
            <Help></Help>
          </>
        }
      </div>
    </div>
  );
}

export default Frame;
