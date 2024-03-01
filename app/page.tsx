"use client";
import NavBar from "./components/NavBar/NavBar";
import HomePageGames from "./components/HomePage/HomePage/main/HomePageGames";
import Aside from "./components/HomePage/HomePage/aside/Aside";
import useSelectedGenre from "@/customHooks/state between two components/useSelectedGenre";
import useEnteredText from "@/customHooks/state between two components/useEnteredText";



export default function Home() {
  const { selectedGenre, setSelectedGenre } = useSelectedGenre();
  const {enteredText , setEnteredText} = useEnteredText()
  return (
    <div className="w-full">
      <NavBar onSearchNavBar={(value) => setEnteredText(value)}/>

      <div className="flex flex-row pt-[17vh]">
        <Aside
          setSelectedGenre={setSelectedGenre}
          selectedGenre={selectedGenre}
        />
        <div className="flex-grow h-screen pl-[17vw]">
          <HomePageGames selectedGenre={selectedGenre} enteredText={enteredText}  />
        </div>
      </div>
    </div>
  );
}
