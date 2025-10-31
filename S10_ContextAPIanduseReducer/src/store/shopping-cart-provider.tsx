import { type ReactNode } from "react";
import CartContext from "./shopping-cart-context";

const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const ctxValue = {
    items: [],
  };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
};

export default CartContextProvider;
