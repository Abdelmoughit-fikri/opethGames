"use client";
import { gameDataTypes } from "@/app/Games/GameDetails";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

interface Props {
  children: React.ReactNode;
}
type valueType = {
  handleAddProductToCart: (product: gameDataTypes) => void;
  cartProducts: gameDataTypes[] | null;
  clearOneItem: (product: gameDataTypes) => void;
  clearAll: () => void;
};
const CartContext = createContext<valueType | null>(null);

const CartContextModule = ({ children }: Props) => {
  const [cartProducts, setCartProducts] = useState<gameDataTypes[] | null>(
    null
  );
  //
  const handleAddProductToCart = useCallback((product: gameDataTypes) => {
    setCartProducts((prev: any) => {
      let updatedCart;
      if (prev) {
        updatedCart = [...prev, product];
      } else {
        updatedCart = [product];
      }
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
      return updatedCart;
    });
  }, []);
  //
  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      setCartProducts(JSON.parse(storedCart)); // Update state with stored data
    }
  }, []);
  
  //
  const clearOneItem = useCallback(
    (product: gameDataTypes) => {
      setCartProducts((prev : any) => {
        let filteredProducts;
        if (!prev) {
          null;
        } else {
          filteredProducts = prev.filter((item : any) => {
            return item.id !== product.id;
          });
        }
        localStorage.removeItem("cartItems")
        localStorage.setItem("cartItems" , JSON.stringify(filteredProducts || null))
        return filteredProducts
      });
    },
    [cartProducts]
  );
  //
  const clearAll = useCallback(() => {
    setCartProducts(null);
    localStorage.setItem("cartItems", JSON.stringify(null));
  }, []);
  return (
    <CartContext.Provider
      value={{
        handleAddProductToCart,
        cartProducts,
        clearOneItem,
        clearAll,
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
