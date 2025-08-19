import "./App.css";
import { GameBoard } from "./components/GameBoard";
import { Log } from "./components/Log";

function App() {
  return (
    <>
      <div id="game-container">
        <ol id="players className=" highlight-player></ol>
        <GameBoard />
      </div>
      <Log />
    </>
  );
}

export default App;
