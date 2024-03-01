"use client";
import { resultsTypes } from "@/customHooks/data/useGames";
import Image from "next/image";
import React from "react";
import CriticScore from "./CriticScore";
import CropImage from "@/services/crop-image";

interface Props {
  game: resultsTypes;
}

const GameCard = ({ game }: Props) => {
  return (
    <div
      className="col-span-1
    cursor-pointer
    dark:bg-slate-800
    bg-slate-200
    w-[200px]
    rounded-[10px]
    py-[17px]
    transition
    hover:scale-105
    text-center
    text-sm"
    >
      <div className="flex flex-col items-center">
        <Image
          src={CropImage(game.background_image)}
          alt={game.name}
          width={170}
          height={170}
          className="mx-auto rounded-[15px] object-contain"
        />
        <h1 className="font-semibold text-black dark:text-white mt-[7px]">
          {game.name}
        </h1>
        <div>
          {game.parent_Platforms &&
            game.parent_Platforms.map(({ platform }) => (
              <p key={platform.id} className="text-black dark:text-white">
                {platform.name}
              </p>
            ))}
        </div>
        <CriticScore score={game.metacritic} />
      </div>
    </div>
  );
};

export default GameCard;
