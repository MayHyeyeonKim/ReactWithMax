import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#EFEBE9",
      light: "#FFFFFF",
      dark: "#D7CCC8",
    },
    secondary: {
      main: "#F5F5F5",
      light: "#FFFFFF",
      dark: "#E0E0E0",
    },
    background: {
      default: "#FAFAFA",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#424242",
      secondary: "#757575",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Dancing Script", cursive',
      fontWeight: 400,
    },
    h2: {
      fontFamily: '"Dancing Script", cursive',
      fontWeight: 400,
    },
    h3: {
      fontFamily: '"Dancing Script", cursive',
      fontWeight: 300,
      fontSize: "2.5rem",
    },
    h4: {
      fontFamily: '"Dancing Script", cursive',
      fontWeight: 400,
    },
    h5: {
      fontFamily: '"Dancing Script", cursive',
      fontWeight: 400,
    },
    h6: {
      fontFamily: '"Dancing Script", cursive',
      fontWeight: 400,
    },
    body1: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
    body2: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
    button: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        },
      },
    },
  },
});
