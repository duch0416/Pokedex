import { useState, useEffect } from "react";

import { getSinglePokemon } from "../../api/actions/getPokemonData";

type PokemonMinType = {
  id: number;
  name: string;
  img: string;
  types: Array<string>;
};

export const usePokemonData = (pokemonName: string) => {
  const [pokemon, setPokemon] = useState<PokemonMinType>();

  const getPokemonData = async () => {
    const data = await getSinglePokemon(pokemonName);
    setPokemon({
      id: data.id,
      name: data.name,
      img: data.sprites.front_default,
      types: data.types.map((data: any) => {
        return data.type.name;
      }),
    });
    console.log(data);
  };

  useEffect(() => {
    getPokemonData();
  }, []);

  return {
    pokemon,
  };
};
