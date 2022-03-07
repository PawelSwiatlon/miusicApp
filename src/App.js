import React from "react";

// Adding Components
import Player from "./components/Player";
import Song from "./components/Song";

// Import Styles
import './assets/style/css/main.css'; 

function App() {
  return (
    <div className="App">
      <Song />
      <Player />
    </div>
  );
}

export default App;
