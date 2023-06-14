import { useEffect, useState } from "react";
import { immersionService } from "../services/ImmersionService";
import Help from "./Help";
import Intro from "./Intro";
import Timer from "./Timer";
import View from "./View";
import Loader from "./Loader";
import { subscribeKey } from "valtio/utils";
import { store } from "../store/store";
import GameLost from "./GameLost";

function Frame(){
  const [started,setStarted] = useState(true);
  const [briefingStarted,setBriefingStarted] = useState(false);
  const [gameLost, setGameLost] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);

  const unsubscribeLost = subscribeKey(store, 'gameLost', (state)=>{setGameLost(state); unsubscribeLost();});
  const unsubscribeEnded = subscribeKey(store, 'gameEnded', (state)=>{setGameEnded(state); unsubscribeEnded();});

  
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
            {!gameEnded && !gameLost?
              <>
                <Timer></Timer>
                <Help></Help>
              </>:
              null
            }
            {
              gameLost?
                <GameLost/>:
                null
            }
          </>
        }
      </div>
    </div>
  );
}

export default Frame;
