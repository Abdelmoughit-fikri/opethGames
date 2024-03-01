"use client";
import useGenres, { GenresResultsType } from "@/customHooks/data/useGenres";
import CropImage from "@/services/crop-image";
import Image from "next/image";

interface GenreListProps {
  onSelectGenre: (genre: GenresResultsType) => void;
  selectedGenreHighlight: GenresResultsType | null;
  staticData: any;
}

const GenreList = ({
  onSelectGenre,
  selectedGenreHighlight,
  staticData,
}: GenreListProps) => {
  const { data } = useGenres();

  ////////
  return (
    <div>
      {data.map((genre) => {
        return (
          <div
            key={genre.id}
            className={`flex items-center gap-2 mb-[10px] cursor-pointer 
            hover:transform-right group container
            hover:flex hover:items-center
            bg-slate-200 dark:bg-slate-800 p-[0.4rem]
            hover:scale-105
            ${
              genre.id === selectedGenreHighlight?.id
                ? "dark:bg-gray-700 bg-teal-400 scale-90 transition"
                : null
            }
            rounded-[20px]`}
            onClick={() => {
              onSelectGenre(genre);
            }}
          >
            <Image
              src={CropImage(genre.image_background)}
              alt={genre.name}
              width={70}
              height={70}
              className=" rounded-[10px]"
            />
            <p className=" text-[1.1rem]">{genre.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default GenreList;
