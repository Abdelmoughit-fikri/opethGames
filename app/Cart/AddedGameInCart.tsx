import { useCart } from "@/Context/CartContextModule";
import Link from "next/link";
import React from "react";
import GameInCartItems from "./GameInCartItems";
import ClearAll from "./ClearAll";

const AddedGameInCart = () => {
  const { cartProducts } = useCart();
  if (!cartProducts || cartProducts.length === 0) {
    return (
      <div className="h-[35vh] w-screen p-[1rem]">
        <div className="h-[100%] w-full flex items-center gap-5">
          <Link href={"/"} className="hover:underline mx-auto text-[2rem]">
            Your cart is empty! Go shopping now
          </Link>
        </div>
      </div>
    );
  }
  return (
    <>
      <div>
        {cartProducts?.map((data) => {
          return <GameInCartItems key={data.id} item={data} />;
        })}
      </div>
      <div className="w-screen dark:bg-gray-900 text-right p-[4rem]">
        <ClearAll />
      </div>
    </>
  );
};

export default AddedGameInCart;
