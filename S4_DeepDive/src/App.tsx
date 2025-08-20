import "./App.css";
import { GameBoard } from "./components/GameBoard";
import { Log } from "./components/Log";
import { Player } from "./components/Player";

function App() {
  return (
    <>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" />
          <Player name="Player 2" symbol="O" />
        </ol>
        <GameBoard />
      </div>
      <Log />
    </>
  );
}

export default App;
