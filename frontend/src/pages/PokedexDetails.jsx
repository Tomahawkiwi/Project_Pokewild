import React from "react";
import PokemonPage from "../components/Pokedex/Focus/PokemonPage";
import { bgGradLightRed } from "../tools/constants";

function PokedexDetails() {
  return (
    <div className={`${bgGradLightRed} w-full h-full`}>
      <div>
        <PokemonPage />
      </div>
    </div>
  );
}

export default PokedexDetails;
