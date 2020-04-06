import { useState, useEffect } from "react";

import { getSinglePokemon } from "../../api/actions/getPokemonData";

interface PokemonMinInterface {
  id: number;
  name: string;
  img: string;
  types: Array<string>;
}

export const usePokemonData = (pokemonName: string) => {
  const [pokemon, setPokemon] = useState<PokemonMinInterface>({
    id: 1,
    name: "bulbasaur",
    img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    types: ["grass", "poison"],
  });

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
  };

  useEffect(() => {
    getPokemonData();
  }, []);

  return {
    pokemon,
  };
};
