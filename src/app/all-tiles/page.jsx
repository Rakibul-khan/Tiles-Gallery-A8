"use client";
import SearchComponent from "@/components/SearchComponent";
import TilesFetching from "@/components/TilesFetching";
import { getTiles } from "../fetch";
import { useState, useEffect } from "react";

const AllTilesPage = () => {
  const [tiles, setTiles] = useState([]);
  const [filteredData, setFilterData] = useState([]);
  useEffect(() => {
    const fetchMyTiles = async () => {
      const data = await getTiles();
      setTiles(data);
      setFilterData(data);
    };
    fetchMyTiles();
  }, []);

  return (
    <>
      <h1 className="font-semibold text-4xl text-center text-slate-600 my-5">
        The Gallery of Tiles
      </h1>
      <div className=" w-11/12 mx-auto">
        <SearchComponent
          setFilterData={setFilterData}
          tiles={tiles}
        ></SearchComponent>
        <TilesFetching tiles={filteredData}></TilesFetching>
      </div>
    </>
  );
};

export default AllTilesPage;
