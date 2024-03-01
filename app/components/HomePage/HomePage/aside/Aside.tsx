"use client";
import React from "react";
import GenreList from "./GenreList";
import { GenresResultsType } from "@/customHooks/data/useGenres";
import genreNames from "@/services/genreNames";

const Aside = ({
  selectedGenre,
  setSelectedGenre,
}: {
  selectedGenre: GenresResultsType | null;
  setSelectedGenre: (genre: GenresResultsType) => void;
}) => {
  return (
    <div className="dark:bg-gray-900 h-[83vh] xl:w-[17.5%] overflow-auto fixed ">
      <div className="w-[90%] h-full mx-auto py-[1rem] text-black dark:text-white">
        <GenreList
          onSelectGenre={setSelectedGenre}
          selectedGenreHighlight={selectedGenre}
          staticData={genreNames}
        />
      </div>
    </div>
  );
};

export default Aside;
