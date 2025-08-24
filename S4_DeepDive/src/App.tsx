import { useState } from "react";
import { GameBoard } from "./components/GameBoard";
import { Log } from "./components/Log";
import { Player } from "./components/Player";

function App() {
  const [players, setPlayers] = useState({ X: "Player 1", O: "Player 2" });
  const [activePlay, setActivePlay] = useState<"X" | "O">("X");

  const INITIAL_BOARD = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  const handleSelectSquare = (row: number, col: number) => {
    setActivePlay((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));

    console.log("Selected square:", row, col);
  };

  const handlePlayerNameChange = (symbol: string, newName: string) => {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newName,
      };
    });
  };

  return (
    <>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            isActive={activePlay === "X"}
            symbol="X"
            name={players.X}
            onChangeName={handlePlayerNameChange}
          />
          <Player isActive={activePlay === "O"} symbol="O" name={players.O} />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} board={INITIAL_BOARD} />
      </div>
      <Log />
    </>
  );
}

export default App;
