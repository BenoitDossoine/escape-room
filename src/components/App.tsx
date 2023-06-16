import Frame from "./Frame";

function App() {
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
