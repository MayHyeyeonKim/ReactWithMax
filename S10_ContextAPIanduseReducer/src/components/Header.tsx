import { useContext } from "react";
import { Typography, IconButton, Badge, Box } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartContext from "../store/shopping-cart-context";

const Header = () => {
  const context = useContext(CartContext);
  const { state } = context;
  const itemCount = state.items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px",
        backgroundColor: "primary.main",
        color: "text.primary",
      }}
    >
      <Typography variant="h3">MayBean Coffee</Typography>
      <IconButton color="inherit">
        <Badge badgeContent={itemCount} color="primary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </Box>
  );
};

export default Header;
