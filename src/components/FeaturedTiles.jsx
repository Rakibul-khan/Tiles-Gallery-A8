import TileCard from "./TileCard";

const getTiles = async () => {
  const res = await fetch("http://localhost:5000/tiles");
  return await res.json();
};

const FeaturedTiles = async () => {
  const tiles = await getTiles();

  return (
    <div>
      <h2 className="font-semibold text-5xl text-center my-8">
        Featured Tiles
      </h2>
      <div className="grid grid-cols-3 gap-3 w-11/12 mx-auto">
        {tiles.slice(0, 6).map((tile) => (
          <TileCard key={tile.id} tile={tile}></TileCard>
        ))}
      </div>
    </div>
  );
};

export default FeaturedTiles;
