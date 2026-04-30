import Marquee from "react-fast-marquee";

const MarqueeComponent = () => {
  return (
    <div
      className="bg-gray-200 px-3 py-2 w-11/12 mx-auto my-3
     rounded-lg"
    >
      <Marquee className="font-medium text-lg">
        New Arrivals :Ceramic Blue Tile | Marble White Tile
      </Marquee>
    </div>
  );
};

export default MarqueeComponent;
