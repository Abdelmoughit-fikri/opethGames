"use client";
import GameCard from "../../Card/GameCard";
import { GenresResultsType } from "@/customHooks/data/useGenres";
import PlatformSelector from "./PlatformSelector";
import { useState } from "react";
import { PlatformChild } from "@/customHooks/data/usePlatforms";
import useGames from "@/customHooks/data/useGames";
import Heading from "./Heading";
import {
  ReadonlyURLSearchParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import Link from "next/link";

interface Props {
  selectedGenre: GenresResultsType | null;
  enteredText: string | null;
}
const HomePageGames = ({ selectedGenre, enteredText }: Props) => {
  //
  const router = useRouter();

  //
  const [selectedPlatform, setSelectedPlatform] =
    useState<PlatformChild | null>(null);
  const [selectedTypeState] = useState<string | null>(null);
  const { data } = useGames(
    selectedGenre,
    selectedPlatform,
    selectedTypeState,
    enteredText
  );
  //

  return (
    <>
      <div className="flex flex-col items-center">
        <div
          className="dark:bg-gray-900 h-[5rempx] py-[2rem] px-[7.8rem] w-[100%]
        flex flex-col items-center "
        >
          <PlatformSelector
            selectedPlatform={(platform) => setSelectedPlatform(platform)}
          />
          <Heading heading={selectedGenre?.name} />
          {/* <Sort onSelectOrder={(type) => setSelectedTypeState(type)} /> */}
        </div>

        <div
          className=" grid grid-cols-1
    sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
    2xl:grid-cols-5 gap-8 px-[8rem] py-[1rem]
    dark:bg-gray-900 overflow-auto w-full"
        >
          {data.length > 0 ? (
            data.map((game) => {
              return (
                <Link
                  key={game.id}
                  href={{
                    pathname: `/Games`,
                    query: {
                      id: game.id,
                      name: game.name,
                      image: game.background_image,
                      rating: game.metacritic,
                    },
                  }}
                >
                  <GameCard game={game} />
                </Link>
              );
            })
          ) : (
            <div>
              {" "}
              <h1 className="dark:text-white  text-[3rem] w-[1000px] h-[67vh]">
                {selectedPlatform?.name || selectedGenre?.name
                  ? ` Oops ${enteredText} is not available in ${
                      selectedPlatform?.name || selectedGenre?.name
                    }${" "}
              ${
                selectedPlatform?.name
                  ? "platform"
                  : selectedGenre?.name
                  ? "genre"
                  : null
              } Try another search...`
                  : `Oops ${enteredText} is not available among our games. Please try another search...`}
                <button
                  className="dark:text-white text-[25px] underline hover:no-underline"
                  onClick={() => window.location.reload()}
                >
                  Back to home page
                </button>
              </h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HomePageGames;
