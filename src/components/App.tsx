import { useState } from "react";
import Frame from "./Frame";
import Intro from "./Intro";
import { immersionService } from "../services/ImmersionService";

function App() {
  const [started,setStarted] = useState(false);
  return (
    <div className="App" id="appWrapper">
      <audio
        src="./music/background.mp3"
        id="backgroundMusic"
      ></audio>
    
        <Frame/>      
    </div>
  );
}

export default App;
