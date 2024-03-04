"use client";
import CropImage from "@/services/crop-image";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

const GameDetails = () => {
  const searchParams = useSearchParams();
  const name = searchParams?.get("name") as string;
  const image = searchParams?.get("image");
  const rating = searchParams?.get("rating");
  const platform = searchParams?.get("platform");
  return (
    <div className="h-[100vh] dark:bg-gray-900 px-[12rem] py-[2rem]">
      <div
        className="h-[100%] dark:bg-gray-900
      grid grid-cols-2 gap-12"
      >
        <div
          className="flex flex-col items-center
         gap-6 p-5  dark:bg-slate-800 bg-teal-500 text-white w-[70%] h-[73%]
         rounded-[1rem]
         relative
         "
        >
          <Image
            className="rounded-[1rem]"
            alt={name}
            src={CropImage(image as string)}
            width={400}
            height={400}
          />
          <div className="flex flex-col items-center">
            <div className="dark:text-white">{name}</div>
            <div className="dark:text-white">{rating}</div>
            <div className="dark:text-white">{platform}</div>
          </div>
        </div>
        {/*  */}
        <div>
          <div className="flex flex-col items-center gap-5">
            <div className="dark:text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae maxime molestias sequi enim accusantium exercitationem
              fugiat porro vel cum quis quam corrupti reprehenderit facilis, ut,
              laboriosam quaerat fuga inventore aliquam. Voluptatibus esse
              tempore sequi placeat? Molestiae distinctio quibusdam explicabo
              eos nisi delectus accusantium inventore doloremque voluptas quam
              porro esse sunt eius consectetur, quae odio similique reiciendis
              consequatur nulla minima nihil. Esse explicabo vitae molestiae
              officiis veniam dolor. Ab magni nulla facere autem? Illum odio
              obcaecati rerum tempore quis id excepturi sequi. Nihil,
              reprehenderit incidunt fuga animi quam laboriosam mollitia qui
              ullam? Atque, rem? Delectus minima ratione ad, culpa magnam
              eveniet hic cupiditate, officiis suscipit ut veniam quidem nihil?
              Quos magnam delectus vel in numquam dolorum dignissimos corrupti
              iure natus error, dolores fuga accusamus voluptates provident
              atque unde sapiente molestiae sequi omnis mollitia molestias
              libero harum? Ad cupiditate laborum corporis ipsa incidunt, culpa
              deleniti nulla quas fuga consequatur excepturi? Sapiente,
              pariatur.
            </div>
            <Link
              href={"/Cart"}
              className="w-full dark:text-white dark:bg-slate-800
              bg-teal-500
              text-white
            rounded-full
            text-center
            p-2"
            >
              Add to cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
