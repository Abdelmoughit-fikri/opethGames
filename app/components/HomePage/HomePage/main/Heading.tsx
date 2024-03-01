import useGenres from "@/customHooks/data/useGenres";
import React from "react";

const Heading = ({ heading }: { heading: string | undefined }) => {
  const { data } = useGenres();
  const test = data.find((item) => item.name === "Board Games");
  return (
    <div className="mt-[25px] w-[100%] dark:bg-gray-900 dark:text-white  text-left text-[3rem]">
      {heading ? heading + " Games" : " All Games"}
    </div>
  );
};

export default Heading;
