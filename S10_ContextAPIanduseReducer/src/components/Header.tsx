import { useContext, useState } from "react";
import { Typography, IconButton, Badge, Box } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartContext from "../store/shopping-cart-context";
import type { CartItem } from "../store/shoppingCartReducer";
import CartModal from "./CartModal";

const Header = () => {
  const context = useContext(CartContext);
  const { state } = context!;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const itemCount = state.items.reduce(
    (total: number, item: CartItem) => total + item.quantity,
    0
  );

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
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
        <IconButton color="inherit" onClick={handleOpenModal}>
          <Badge badgeContent={itemCount} color="primary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Box>
      <CartModal open={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default Header;
