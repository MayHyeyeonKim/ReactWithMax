import type { BoardState, Player } from "../types/tictactoe";

const calculateWinner = (size: number, boardState: BoardState): Player => {
  // 1. Build winning combinations for rows and columns
  const winningCombinations: number[][] = [];
  for (let i = 0; i < size; i++) {
    const row = [];
    const col = [];
    for (let j = 0; j < size; j++) {
      row.push(i * size + j);
      col.push(i + size * j);
    }
    winningCombinations.push(row, col);
  }
  // 2. Build winning combinations for diagonals
  const diagonal1 = [];
  const diagonal2 = [];
  for (let i = 0; i < size; i++) {
    diagonal1.push(i * (size + 1));
    diagonal2.push((i + 1) * (size - 1)); //0-베이스를 1-베이스로 바꿔준 것 * (size-1)
  }
  winningCombinations.push(diagonal1, diagonal2);

  // 3. Check each combination to determine if a player has won
  for (let i = 0; i < winningCombinations.length; i++) {
    const player = boardState[winningCombinations[i][0]];
    if (!player) continue;

    let hasWon = true;
    for (let j = 0; j < size; j++) {
      if (boardState[winningCombinations[i][j]] !== player) {
        hasWon = false;
        break;
      }
    }
    if (hasWon) return player;
  }
  return null;
};
const calculateTie = (size: number, boardState: BoardState): boolean => {
  return (
    boardState.every((cell) => cell !== null) &&
    !calculateWinner(size, boardState)
  );
};

export { calculateWinner, calculateTie };
