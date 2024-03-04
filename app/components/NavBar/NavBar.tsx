import Image from "next/image";
import React, { useRef } from "react";
import ToggleDarkMode from "./ToggleDarkMode";
import { useRouter } from "next/navigation";
import Link from "next/link";
import SearchInput from "./SearchInput";
interface Props {
  onSearchNavBar: (onSearch: string | null) => void;
}

const NavBar = ({ onSearchNavBar }: Props) => {
  const router = useRouter();
  //
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div className="h-[17vh] bg-teal-500 dark:bg-gray-900 fixed shadow-xl position:absolute w-[100%] z-20 ">
      <div
        className="w-[70%] h-[100%] md:w-[80%] lg:w-[90%] 
        mx-auto
    flex items-center justify-between"
      >
        <Link href={"/"}>
          <Image
            alt="logo"
            src={"/logo.webp"}
            width={100}
            height={100}
            className="cursor-pointer"
          />
        </Link>

        <SearchInput onSearch={(value) => onSearchNavBar(value)} />

        <ToggleDarkMode />
      </div>
    </div>
  );
};

export default NavBar;
