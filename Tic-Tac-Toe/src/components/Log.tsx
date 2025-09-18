import { Button, Typography, Box, List, ListItem, Paper } from "@mui/material";
import type { BoardState } from "../hooks/useEngine";

interface LogProps {
  history: BoardState[];
  jumpTo: (i: number) => void;
  onClick: () => void;
}

export const Log = ({ history, jumpTo, onClick }: LogProps) => {
  return (
    <Box sx={{ textAlign: "center", minWidth: 200 }}>
      <Typography
        variant="h5"
        gutterBottom
        sx={{ fontWeight: "bold", color: "#333" }}
      >
        Game History
      </Typography>
      <Paper elevation={3} sx={{ p: 2 }}>
        <List sx={{ maxHeight: 400, overflowY: "auto" }}>
          {history.map((_, index) => {
            return (
              <ListItem key={index} sx={{ p: 0.5 }}>
                {index === 0 ? (
                  <Button
                    onClick={onClick}
                    variant="contained"
                    color="error"
                    fullWidth
                    sx={{
                      borderRadius: 2,
                      fontWeight: "bold",
                      textTransform: "none",
                      fontSize: "0.9rem",
                    }}
                  >
                    🔄 Reset Game
                  </Button>
                ) : (
                  <Button
                    onClick={() => jumpTo(index)}
                    variant="outlined"
                    fullWidth
                    sx={{
                      borderRadius: 2,
                      textTransform: "none",
                      color: "#666",
                      borderColor: "#ddd",
                      fontSize: "0.85rem",
                      "&:hover": {
                        backgroundColor: "#f5f5f5",
                        borderColor: "#bbb",
                      },
                    }}
                  >
                    📋 Go to move #{index}
                  </Button>
                )}
              </ListItem>
            );
          })}
        </List>
      </Paper>
    </Box>
  );
};
