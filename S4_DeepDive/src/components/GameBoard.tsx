import { useState } from "react";

export const GameBoard = ({
  onSelectSquare,
  board,
}: {
  board: (string | null)[][];
  onSelectSquare: (row: number, col: number) => void;
}) => {
  const [gameBoard] = useState(board);

  return (
    <ol id="game-board">
      {gameBoard.map((row: (string | null)[], rowIndex: number) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol: string | null, colIndex: number) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};
