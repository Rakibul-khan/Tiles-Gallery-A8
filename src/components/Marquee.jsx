import Marquee from "react-fast-marquee";

const MarqueeComponent = () => {
  return (
    <div
      className="bg-gray-200  w-11/12 mx-auto my-8
     rounded-lg"
    >
      <Marquee className="font-medium text-lg p-3">
        New Arrivals : Ceramic Blue Tile | Marble White Tile | Luxury Gold Tile
        | Concrete Grey Tile | Join the community...
      </Marquee>
    </div>
  );
};

export default MarqueeComponent;
