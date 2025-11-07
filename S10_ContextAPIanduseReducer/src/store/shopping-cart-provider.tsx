import { useReducer } from "react";
import CartContext from "./shopping-cart-context";
import { cartReducer, initialState } from "./shoppingCartReducer";

interface CartProviderProps {
  children: React.ReactNode;
}

const CartContextProvider = ({ children }: CartProviderProps) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const contextValue = {
    state,
    dispatch,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default CartContextProvider;
