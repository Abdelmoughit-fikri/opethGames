"use client";
import React, { useContext } from "react";
import GameDetails from "./GameDetails";
import NavBar from "../components/NavBar/NavBar";
import useEnteredText from "@/customHooks/state between two components/useEnteredText";

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { enteredText, setEnteredText } = useEnteredText();

  return (
    <div>
      <NavBar onSearchNavBar={(value) => setEnteredText(value)} />
      <div className="py-[17vh] h-screen">
        <GameDetails />
      </div>
    </div>
  );
};

export default page;
