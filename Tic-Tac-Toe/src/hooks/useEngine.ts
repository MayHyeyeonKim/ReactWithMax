import { useState } from "react";

export type Player = "X" | "O" | null;
export type BoardState = Player[];

export interface GameState {
  history: BoardState[];
  stepNumber: number;
}

const useEngine = () => {
  const createBoardState = () => Array<Player>(9).fill(null);
  const [gameState, setGameState] = useState<GameState>({
    history: [createBoardState()],
    stepNumber: 0,
  });

  console.log(setGameState);

  const calculateWinner = (boardState: BoardState): Player => {
    const size = 5;

    const winningCombinations = [];
    for (let i = 0; i < size; i++) {
      const row = [];
      const col = [];
      for (let j = 0; j < size; j++) {
        row.push(i * size + j);
        col.push(i + size * j);
      }
      winningCombinations.push(row, col);

      // winningCombinations.push([i * size, i * size + 1, i * size + 2]); // rows
      // winningCombinations.push([i, i + size, i + size * 2]); // columns
    }

    const diagonal1 = [];
    const diagonal2 = [];
    for (let j = 0; j < size; j++) {
      diagonal1.push(j * (size + 1));
      diagonal2.push((j + 1) * (size - 1));
    }
    winningCombinations.push(diagonal1, diagonal2);

    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];

      // Check if the positions are occupied by the same player
      if (
        boardState[a] &&
        boardState[a] === boardState[b] &&
        boardState[a] === boardState[c]
      ) {
        return boardState[a];
      }
    }
    return null;
  };

  const calculateTie = (boardState: BoardState): boolean => {
    return (
      boardState.every((cell) => cell !== null) && !calculateWinner(boardState)
    );
  };

  const current = gameState.history[gameState.stepNumber];
  const winner = calculateWinner(current); // put current board state in the function
  const tie = calculateTie(current);
  const isNext = gameState.stepNumber % 2 === 0; // true if X's turn, false if O's turn

  const handleButtonClick = (i: number) => {
    const history = gameState.history.slice(0, gameState.stepNumber + 1);
    const boardState = gameState.history[gameState.stepNumber];

    if (calculateWinner(boardState) || boardState[i]) {
      return;
    }

    const newBoardState = [...boardState];
    newBoardState[i] = isNext ? "X" : "O";

    if (calculateTie(newBoardState)) {
      console.log("It's a tie!");

      history.push(newBoardState);
      setGameState({
        history,
        stepNumber: history.length - 1,
      });
      return;
    }

    history.push(newBoardState);
    setGameState({
      history,
      stepNumber: history.length - 1,
    });
  };

  const jumpTo = (i: number) => {
    setGameState({
      history: gameState.history,
      stepNumber: i,
    });
  };

  const handleReset = () => {
    setGameState({
      history: [createBoardState()],
      stepNumber: 0,
    });
  };

  return {
    gameState,
    current,
    winner,
    tie,
    isNext,
    handleButtonClick,
    jumpTo,
    handleReset,
  };
};

export default useEngine;
