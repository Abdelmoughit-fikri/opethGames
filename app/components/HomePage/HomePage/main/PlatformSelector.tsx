import usePlatforms, { PlatformChild } from "@/customHooks/data/usePlatforms";
import React, { useState } from "react";

interface Props {
  selectedPlatform: (platform: PlatformChild | null) => void;
}

const PlatformSelector = ({ selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();

  //Gemini state
  const [selectedValue, setSelectedValue] = useState<string>(""); // Track selected value

  //Gemini Code l3zzzz
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedPlatformName = event.target.value;
    if (selectedPlatformName === "select") {
      selectedPlatform(null); // Handle default option (no selection)
    } else {
      const selectedPlatformObject = data.find(
        (platform) => platform.name === selectedPlatformName
      );
      if (selectedPlatformObject) {
        selectedPlatform(selectedPlatformObject); // Pass the platform object
        setSelectedValue(selectedPlatformName); // Update selected value state
      } else {
        console.error("Error: Platform not found"); // Handle potential errors
      }
    }
  };

  if (error) return null;
  return (
    <div>
      <select
        name="select"
        id="1"
        onChange={handleChange}
        className="h-[50px] bg-slate-200 dark:bg-slate-800 rounded-[10px]
        dark:text-slate-50
        text-black
        outline-none
        px-[20px]
        cursor-pointer
        relative
        left-0"
      >
        <option value="select">All platforms</option>
        {data.map((platform) => {
          return (
            <option key={platform.id} value={platform.name}>
              {platform.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default PlatformSelector;
