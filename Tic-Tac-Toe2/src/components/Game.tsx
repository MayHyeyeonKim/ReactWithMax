import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Game = () => {
  return (
    <>
      <Box
        sx={{ backgroundColor: "#f8f9fa", minHeight: "100vh", px: 2, py: 4 }}
      >
        <Typography variant="h3" align="center" gutterBottom>
          Tic Tac Toe{" "}
        </Typography>

        <Box
          sx={{
            p: 4,
            borderRadius: 3,
            backgroundColor: "#fff",
            maxWidth: 1000,
            mx: "auto",
          }}
        >
          <Typography variant="h5" align="center" gutterBottom>
            Game Component Placeholder
          </Typography>

          <Box sx={{ textAlign: "center", mt: 3 }}>
            <Typography variant="body1" color="textSecondary">
              This is where the game board and controls will go.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Game;
