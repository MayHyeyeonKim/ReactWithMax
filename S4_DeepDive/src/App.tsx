import { useState } from "react";
import { GameBoard } from "./components/GameBoard";
import { Log } from "./components/Log";
import { Player } from "./components/Player";
import { deriveActivePlayer, deriveGameBoard, deriveWinner, INITIAL_GAME_BOARD, PLAYERS } from "./helper";
import { GameOver } from "./components/GameOver";

function App() {
  const [players, setPlayers] = useState<typeof PLAYERS>(PLAYERS);
  const [gameTurns, setGameTurns] = useState<Array<{ player: "X" | "O"; square: { row: number; col: number } }>>([]);

  const activePlayer: "X" | "O" = deriveActivePlayer(gameTurns);
  const gameBoard: typeof INITIAL_GAME_BOARD = deriveGameBoard(gameTurns);
  const winner: string | null = deriveWinner(gameBoard, players) ?? null;
  const hasDraw: boolean = gameTurns.length === 9 && !winner;

  const handleSelectSquare = (row: number, col: number): void => {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns: Array<{ square: { row: number; col: number }; player: "X" | "O" }> = [
        { square: { row, col }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  };

  const handlePlayerNameChange = (symbol: string, newName: string): void => {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newName,
      };
    });
  };

  const handleRestart = (): void => {
    setGameTurns([]);
  };

  return (
    <>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player isActive={activePlayer === "X"} symbol="X" name={PLAYERS.X} onChangeName={handlePlayerNameChange} />
          <Player isActive={activePlayer === "O"} symbol="O" name={PLAYERS.O} onChangeName={handlePlayerNameChange} />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart} />}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </>
  );
}

export default App;
