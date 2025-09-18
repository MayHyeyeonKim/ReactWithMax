import { Button, Typography, Box, Paper } from "@mui/material";
import type { BoardState } from "../hooks/useEngine";

interface BoardProps {
  board: BoardState;
  onClick: (i: number) => void;
}

export const Board = ({ board, onClick }: BoardProps) => {
  const renderSquare = (i: number) => {
    return (
      <Button
        variant="outlined"
        onClick={() => onClick(i)}
        sx={{
          width: 80,
          height: 80,
          fontSize: "2.5rem",
          fontWeight: "bold",
          backgroundColor: board[i] ? "#f8f9fa" : "#fff",
          color:
            board[i] === "X"
              ? "#2196F3"
              : board[i] === "O"
              ? "#FF5722"
              : "#000",
          border: "3px solid #e0e0e0",
          borderRadius: 2,
          transition: "all 0.2s ease-in-out",
          "&:hover": {
            backgroundColor: board[i] ? "#f8f9fa" : "#f0f0f0",
            borderColor: "#bbb",
            transform: "scale(1.05)",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          },
          "&:disabled": {
            backgroundColor: "#f8f9fa",
            color: board[i] === "X" ? "#2196F3" : "#FF5722",
            transform: "none",
          },
        }}
        disabled={!!board[i]}
      >
        {board[i]}
      </Button>
    );
  };

  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography
        variant="h5"
        gutterBottom
        sx={{ fontWeight: "bold", color: "#333" }}
      >
        Game Board
      </Typography>
      <Paper elevation={3} sx={{ p: 2, display: "inline-block" }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 1,
            width: 264,
          }}
        >
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <Box key={i}>{renderSquare(i)}</Box>
          ))}
        </Box>
      </Paper>
    </Box>
  );
};
