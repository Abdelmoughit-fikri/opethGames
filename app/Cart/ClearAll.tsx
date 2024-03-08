import { useCart } from "@/Context/CartContextModule";
import React from "react";

const ClearAll = () => {
  const { clearAll } = useCart();
  return (
    <button
      onClick={() => clearAll()}
      className="dark:bg-slate-800 bg-teal-500 text-white w-[15rem] rounded-[20px] p-2"
    >
      Clear All
    </button>
  );
};

export default ClearAll;
