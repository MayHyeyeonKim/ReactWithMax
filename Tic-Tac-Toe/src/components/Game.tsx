import { Stack, Typography, Box, Paper, Chip } from "@mui/material";
import useEngine from "../hooks/useEngine";
import { Board } from "./Board";
import { Log } from "./Log";

export const Game = () => {
  const {
    current,
    winner,
    tie,
    gameState,
    isNext,
    handleButtonClick,
    jumpTo,
    handleReset,
  } = useEngine();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f8f9fa",
        py: 4,
        px: 2,
      }}
    >
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{
          fontWeight: "bold",
          color: "#333",
          mb: 4,
          textShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        🎮 Tic Tac Toe
      </Typography>

      <Paper
        elevation={6}
        sx={{
          p: 4,
          borderRadius: 3,
          backgroundColor: "#fff",
          maxWidth: 1000,
          mx: "auto",
        }}
      >
        <Box sx={{ textAlign: "center", mb: 3 }}>
          {winner ? (
            <Chip
              label={`🎉 Winner is ${winner}!`}
              color="success"
              size="medium"
              sx={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                py: 2,
                px: 3,
              }}
            />
          ) : tie ? (
            <Chip
              label="It's a Tie!"
              color="warning"
              size="medium"
              sx={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                py: 2,
                px: 3,
                backgroundColor: "#FF9800",
                color: "white",
              }}
            />
          ) : (
            <Chip
              label={`Next Player: ${isNext ? "X" : "O"}`}
              color="primary"
              size="medium"
              sx={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                py: 2,
                px: 3,
                backgroundColor: isNext ? "#2196F3" : "#FF5722",
                color: "white",
              }}
            />
          )}
        </Box>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          justifyContent="center"
          alignItems="center"
          sx={{ width: "100%" }}
        >
          <Board board={current} onClick={handleButtonClick} />
          <Log
            history={gameState.history}
            jumpTo={jumpTo}
            onClick={handleReset}
          />
        </Stack>
      </Paper>
    </Box>
  );
};
