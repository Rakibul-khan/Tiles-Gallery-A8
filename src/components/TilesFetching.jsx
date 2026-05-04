import { getTiles } from "@/app/fetch";
import TileCard from "./TileCard";

const TilesFetching = async () => {
  const tiles = await getTiles();

  return (
    <div className="grid md:grid-cols-3 gap-4">
      {tiles.map((tile) => (
        <TileCard key={tile.id} tile={tile}></TileCard>
      ))}
    </div>
  );
};

export default TilesFetching;
