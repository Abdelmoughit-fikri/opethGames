"use client";
import React from "react";
import AddedGameInCart from "./AddedGameInCart";
import NavBar from "../components/NavBar/NavBar";
import useEnteredText from "@/customHooks/state between two components/useEnteredText";

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { enteredText, setEnteredText } = useEnteredText();

  return (
    <>
      {" "}
      <NavBar onSearchNavBar={(value) => setEnteredText(value)} />
      <div className="h-full dark:bg-gray-900 dark:text-white">
        <div className="pt-[17vh]">
          <AddedGameInCart />
        </div>
      </div>
    </>
  );
};

export default page;
