import { createContext } from "react";

const CartContext = createContext<{ items: string[] }>({
  items: [],
});

export default CartContext;
