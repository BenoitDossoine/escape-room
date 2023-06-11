import { useEffect, useState } from "react";
import { immersionService } from "../services/ImmersionService";
import Help from "./Help";
import Intro from "./Intro";
import Inventory from "./Inventory";
import Timer from "./Timer";
import View from "./View";
import Loader from "./Loader";

function Frame(){
  const [started,setStarted] = useState(false);
  const [briefingStarted,setBriefingStarted] = useState(false);
  
  useEffect(() => {
      let timer = setTimeout(() => setBriefingStarted(true), 3000);

      return () => {
        clearTimeout(timer);
      };

    },[]);

  return(
    <div className="frame-wrapper">
      <div className="frame">
        {!started?
          briefingStarted?
            <Intro 
              startGame={()=>{
                setStarted(true);
                immersionService.playBackgroundAudio();
                immersionService.setFullScreen();
              }}
            />:
            <Loader/>
          :
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
