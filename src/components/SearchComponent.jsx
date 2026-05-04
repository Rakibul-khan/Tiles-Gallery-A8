"use client";

import { Button } from "@heroui/react";
import { useState } from "react";
import TileCard from "./TileCard";

const SearchComponent = ({ tiles, setFilterData }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    const data = tiles.filter((tile) =>
      tile.title.toLowerCase().includes(search.toLowerCase()),
    );
    setFilterData(data);
  };

  return (
    <div>
      <div className="flex justify-center gap-3 items-center ">
        <div className="">
          <input
            defaultValue={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border-3 border-gray-400 rounded-xl w-150 px-3   py-2 mx-auto text-lg"
            type="search"
            name="search"
            id="search"
            placeholder="Search  Tiles..."
          />
        </div>
        <Button onClick={handleSearch} variant="outline" className="py-5 px-6">
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchComponent;
