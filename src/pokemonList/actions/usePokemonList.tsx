import { useState, useEffect } from "react";

import { getPokemonArray } from "../../api/actions/getPokemonData";

export const usePokemonList = (interval: { limit: number; offset: number }) => {
  const [pokemonsNameList, setPokemonNameList] = useState<Array<string>>([]);

  const getPokemonIdList = async () => {
    const data = await getPokemonArray(interval);

    setPokemonNameList(
      data.results.map((pokemon: { name: string }) => {
        return pokemon.name;
      }),
    );
  };
 
  useEffect(() => {
    getPokemonIdList();
  }, []);

  return {
    pokemonsNameList,
  };
};
