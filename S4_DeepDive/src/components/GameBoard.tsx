export const GameBoard = ({
  onSelectSquare,
  board,
}: {
  board: (string | null)[][];
  onSelectSquare: (row: number, col: number) => void;
}) => {
  return (
    <ol id="game-board">
      {board.map((row: (string | null)[], rowIndex: number) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol: string | null, colIndex: number) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>
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
