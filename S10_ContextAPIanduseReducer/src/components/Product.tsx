import { useContext } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
import CartContext from "../store/shopping-cart-context";

interface ProductProps {
  id: string;
  image: string;
  title: string;
  price: number;
  description: string;
}

const Product = ({ id, image, title, price, description }: ProductProps) => {
  const context = useContext(CartContext);
  const { dispatch } = context!;

  const addToCartHandler = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id,
        name: title,
        price,
        quantity: 1,
      },
    });
    console.log(`Added ${title} to cart.`);
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={title}
        sx={{ objectFit: "cover" }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {description}
        </Typography>
        <Typography variant="h6" color="primary">
          ${price.toFixed(2)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          fullWidth
          onClick={addToCartHandler}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;
