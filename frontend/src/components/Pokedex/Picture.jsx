import React from "react";
import trees from "../../assets/pokedex/pokedex-header.png";

function Picture() {
  return (
    <div className="w-full p-20 flex flex-col justify-end items-center relative h-[200px]">
      <img
        className="w-full h-full top-0 left-0 object-cover absolute"
        src={trees}
        alt="trees"
      />
      <h1 className="absolute text-4xl text-white font-Silkscreen md:text-7xl lg:text-8xl">
        Pokédex
      </h1>
    </div>
  );
}

export default Picture;
