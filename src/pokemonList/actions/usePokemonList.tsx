import { useState, useEffect } from "react";

import { getPokemonArray } from "../../api/actions/getPokemonData";

export const usePokemonList = (generation: string) => {
  const [pokemonsNameList, setPokemonNameList] = useState<Array<string>>([]);
  

  const setLimitAndOffset = (generation: string) => {
    let interval
    if(generation === "1"){
       interval = { limit: 151, offset: 0 }
    }else if(generation === "2"){
      interval = { limit: 100, offset: 151 }
    }else if(generation === "3"){
      interval = { limit: 135, offset: 251 }
    }else if(generation === "4"){
      interval = { limit: 107, offset: 386 }
    }else if(generation === "5"){
      interval = { limit: 156, offset: 493 }
    }else if(generation === "6"){
      interval = { limit: 72, offset: 649 }
    }else if(generation === "7"){
      interval = { limit: 81, offset: 721 }
    }else {
      interval = { limit: 802, offset: 0 }
    }
    return interval
  }

  
  const getPokemonNameList = async () => {
    const interval = setLimitAndOffset(generation)

    const data = await getPokemonArray(interval);

    setPokemonNameList(
      data.results.map((pokemon: { name: string }) => {
        return pokemon.name;
      }),
    );
  };
 

  useEffect(() => {
    getPokemonNameList()
  }, []);

  return {
    pokemonsNameList,
  };
};
