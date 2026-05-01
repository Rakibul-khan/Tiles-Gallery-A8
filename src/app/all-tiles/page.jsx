import TileCard from "@/components/TileCard";

const getTiles = async () => {
  const res = await fetch("http://localhost:5000/tiles");
  return await res.json();
};

const AllTilesPage = async () => {
  const tiles = await getTiles();
  return (
    <>
      <h1 className="font-semibold text-4xl text-center text-slate-600 my-5">
        The Gallery of Tiles
      </h1>
      <div className="grid grid-cols-3 gap-3 w-11/12 mx-auto">
        {tiles.map((tile) => (
          <TileCard key={tile.id} tile={tile}></TileCard>
        ))}
      </div>
    </>
  );
};

export default AllTilesPage;
