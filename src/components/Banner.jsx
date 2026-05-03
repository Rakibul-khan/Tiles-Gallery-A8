import Image from "next/image";
import React from "react";
import BannerImg from "@/assests/banner.png";
import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="h-100 md:h-162.5 relative w-full">
      <Image
        className="mx-auto object-cover"
        src={BannerImg}
        alt="banner image"
        fill
      ></Image>
      <div className="absolute inset-0 bg-black/30 rounded-xl"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="animate__animated  animate__zoomIn text-4xl px-3 md:px-0 text-center md:text-8xl font-bold mb-4 text-gray-300">
          Discover Your Perfect Aesthetic
        </h1>
        <Link href="/all-tiles">
          <Button
            variant="outline"
            className=" md:text-2xl text-lg md:p-7 md:my-10 text-gray-900  "
          >
            Browse Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
