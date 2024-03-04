"use client";
import { MoonIcon, SunIcon } from "@heroicons/react/16/solid";
import React, { useEffect, useState } from "react";

const ToggleDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);
  //
  useEffect(() => {
    const theme = localStorage.getItem("theme" ,);
    if (theme === "dark") setDarkMode(true);
  }, []);
  //
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  //
  return (
    <div className="flex items-center gap-[30px]">
      <div
        className={`relative w-[3rem] h-[3rem]
       rounded-full flex items-center ${darkMode ? "bg-slate-700" : null}`}
        onClick={() => setDarkMode(false)}
      >
        <SunIcon className="text-slate-50 w-[80%] mx-auto cursor-pointer" />
      </div>
      <div
        className={` relative w-[3rem] h-[3rem]
        rounded-full flex items-center ${darkMode ? null : "bg-slate-700"}`}
        onClick={() => setDarkMode(true)}
      >
        <MoonIcon className="text-slate-50 w-[80%] mx-auto cursor-pointer" />
      </div>
    </div>
  );
};

export default ToggleDarkMode;
