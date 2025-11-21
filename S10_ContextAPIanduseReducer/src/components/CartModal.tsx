import { useContext } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  List,
  ListItem,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import CartContext from "../store/shopping-cart-context";

interface CartModalProps {
  open: boolean;
  onClose: () => void;
}

const CartModal = ({ open, onClose }: CartModalProps) => {
  const context = useContext(CartContext);
  const { state, dispatch } = context!;

  const handleIncreaseQuantity = (id: string, currentQuantity: number) => {
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { id, quantity: currentQuantity + 1 },
    });
  };

  const handleDecreaseQuantity = (id: string, currentQuantity: number) => {
    if (currentQuantity > 1) {
      dispatch({
        type: "UPDATE_QUANTITY",
        payload: { id, quantity: currentQuantity - 1 },
      });
    }
  };

  const handleRemoveItem = (id: string) => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  const totalPrice = state.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Shopping Cart</DialogTitle>
      <DialogContent>
        {state.items.length === 0 ? (
          <Typography variant="body1" color="text.secondary" sx={{ py: 2 }}>
            The shopping cart is empty.
          </Typography>
        ) : (
          <List>
            {state.items.map((item) => (
              <ListItem
                key={item.id}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "1px solid #e0e0e0",
                  py: 2,
                }}
              >
                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle1">{item.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    ${item.price.toFixed(2)}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <IconButton
                    size="small"
                    onClick={() =>
                      handleDecreaseQuantity(item.id, item.quantity)
                    }
                    disabled={item.quantity === 1}
                  >
                    <RemoveIcon fontSize="small" />
                  </IconButton>
                  <Typography
                    variant="body1"
                    sx={{ minWidth: "30px", textAlign: "center" }}
                  >
                    {item.quantity}
                  </Typography>
                  <IconButton
                    size="small"
                    onClick={() =>
                      handleIncreaseQuantity(item.id, item.quantity)
                    }
                  >
                    <AddIcon fontSize="small" />
                  </IconButton>
                  <IconButton
                    size="small"
                    color="error"
                    onClick={() => handleRemoveItem(item.id)}
                    sx={{ ml: 1 }}
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </Box>
              </ListItem>
            ))}
          </List>
        )}
        {state.items.length > 0 && (
          <Box sx={{ mt: 2, pt: 2, borderTop: "2px solid #000" }}>
            <Typography variant="h6" sx={{ textAlign: "right" }}>
              Total: ${totalPrice.toFixed(2)}
            </Typography>
          </Box>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} sx={{ textTransform: "none" }}>
          Close
        </Button>
        {state.items.length > 0 && (
          <Button variant="contained" sx={{ textTransform: "none" }}>
            Order
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default CartModal;
