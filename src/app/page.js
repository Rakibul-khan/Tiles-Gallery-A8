import Banner from "@/components/Banner";
import FeaturedTiles from "@/components/FeaturedTiles";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Marquee></Marquee>
      <FeaturedTiles></FeaturedTiles>
    </div>
  );
}
