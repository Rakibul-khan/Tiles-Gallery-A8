import SearchComponent from "@/components/SearchComponent";
import TilesFetching from "@/components/TilesFetching";
import { getTiles } from "../fetch";

const AllTilesPage = async () => {
  const tiles = await getTiles();

  return (
    <>
      <h1 className="font-semibold text-4xl text-center text-slate-600 my-5">
        The Gallery of Tiles
      </h1>
      <div className=" w-11/12 mx-auto">
        <SearchComponent tiles={tiles}></SearchComponent>
        <TilesFetching></TilesFetching>
      </div>
    </>
  );
};

export default AllTilesPage;
