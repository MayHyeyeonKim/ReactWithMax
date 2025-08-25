import { WINNING_COMBINATIONS } from "./constants/WINNING_COMBINATIONS";

export const PLAYERS: Record<"X" | "O", string> = {
  X: "Player 1",
  O: "Player 2",
};

export const INITIAL_GAME_BOARD: Array<Array<"X" | "O" | null>> = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export const deriveActivePlayer = (
  gameTurns: Array<{ player: "X" | "O"; square: { row: number; col: number } }>
): "X" | "O" => {
  let currentPlayer: "X" | "O" = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
};

export const deriveGameBoard = (
  gameTurns: Array<{ player: "X" | "O"; square: { row: number; col: number } }>
): Array<Array<"X" | "O" | null>> => {
  const gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }
  return gameBoard;
};

export const deriveWinner = (
  gameBoard: Array<Array<"X" | "O" | null>>,
  players: Record<"X" | "O", string>
): string | undefined => {
  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
      winner = players[firstSquareSymbol];
    }
  }
  return winner;
};
