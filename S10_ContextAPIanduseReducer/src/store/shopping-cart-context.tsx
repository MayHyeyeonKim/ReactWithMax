import { createContext } from "react";
import type { CartState, CartAction } from "./shoppingCartReducer";

export interface CartContextType {
  state: CartState;
  dispatch: (action: CartAction) => void;
}

const CartContext = createContext<CartContextType | null>(null);

export default CartContext;
