"use client";
import { createContext, useContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}
type valueType = {
  cartTotalQ: number;
};
const CartContext = createContext<valueType | null>(null);

const CartContextModule = ({ children }: Props) => {
  const [cartTotalQ, setCartTotalQ] = useState<number>(0);
  return (
    <CartContext.Provider
      value={{
        cartTotalQ,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextModule;
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("no context hhhhh");
  }
  return context;
}
