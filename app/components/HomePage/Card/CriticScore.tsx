import React from "react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  return (
    <div
      className={`w-[3rem] h-[1.3rem] rounded-[10px]  text-black dark:text-white ${
        score >= 90 ? "bg-teal-600" : score >= 85 ? "bg-yellow-400" : null
      } ${score <= 85 ? "bg-red-500" : null}`}
    >
      {score}
    </div>
  );
};

export default CriticScore;
