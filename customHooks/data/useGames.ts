"use client"
import useData from "./useData";
import { GenresResultsType } from "./useGenres";
import { PlatformChild } from "./usePlatforms";

interface Platform {
  id: number
  slug: string
  name: string
}

export interface resultsTypes {
  id: number;
  name: string;
  background_image: string
  parent_Platforms: { platform: Platform }[] // because platform is just an object not array of objects
  metacritic: number
  release_date: string
}






const useGames = (selectedGenre: GenresResultsType | null,
  selectedPlatformChild: PlatformChild | null,
  selectedType: string | null,
  enteredText: string | null,) => {
  const { data , isLoading } = useData<resultsTypes>(
    `/games`,
    { params: { genres: selectedGenre?.id, platforms: selectedPlatformChild?.id, types: selectedType, search: enteredText } },
    [selectedGenre?.id, selectedPlatformChild?.id, selectedType, enteredText]
  );
  return { data , isLoading};
};

export default useGames;