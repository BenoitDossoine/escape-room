import { useState } from "react";
import Frame from "./Frame";
import Intro from "./Intro";

function App() {
  const [started,setStarted] = useState(false);
  return (
    <div className="App" id="appWrapper">
      <audio
        src="./music/background.mp3"
        id="backgroundMusic"
      ></audio>
      {
        !started?
        <Intro 
            startGame={()=>{setStarted(true);
            let audio = document.getElementById("backgroundMusic") as HTMLAudioElement;
            audio.play();
            audio.volume = 0.5;
            // document.getElementsByTagName("body")[0]?.requestFullscreen();
          }}
          />:
        <Frame/>
      }      
    </div>
  );
}

export default App;
