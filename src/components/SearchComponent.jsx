"use client";

import { Button } from "@heroui/react";
import { useState } from "react";

const SearchComponent = ({ tiles }) => {
  return (
    <div className="flex justify-center gap-3 items-center ">
      <div className="">
        <input
          className="border-3 border-gray-400 rounded-xl w-150 px-3   py-2 mx-auto text-lg"
          type="search"
          name="search"
          id="search"
          placeholder="Search  Tiles..."
        />
      </div>
      <Button variant="outline" className="py-5 px-6">
        Search
      </Button>
    </div>
  );
};

export default SearchComponent;
