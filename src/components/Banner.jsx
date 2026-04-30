import Image from "next/image";
import React from "react";
import BannerImg from "@/assests/banner.png";
import { Button } from "@heroui/react";

const Banner = () => {
  return (
    <div className="h-[650px] relative w-full">
      <Image
        className="mx-auto object-cover"
        src={BannerImg}
        alt="banner image"
        fill
      ></Image>
      <div className="absolute inset-0 bg-black/30 rounded-xl"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-8xl font-bold mb-4 text-gray-300">
          Discover Your Perfect Aesthetic
        </h1>
        <Button variant="outline" className="text-2xl p-7">
          Browse Now
        </Button>
      </div>
    </div>
  );
};

export default Banner;
