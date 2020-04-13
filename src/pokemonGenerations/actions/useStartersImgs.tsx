import { useState, useEffect } from "react";

import { getSinglePokemon } from "../../api/actions/getPokemonData";

export const useStartersImgs = (startersNames: Array<string>) => {
  const [startersImgs, setStartersImgs] = useState<Array<string>>([]);

  
  const getStartersImgs = async (startersNames: Array<string>, setStartersImgs: any) => {
    Promise.all(startersNames.map(async (pokeName: string) => {
      const pokemon = await getSinglePokemon(pokeName);
      setStartersImgs((prevState: any) => {
        return [...prevState, pokemon.sprites.front_default];
      });
    }));
  };

  useEffect(() => {
      getStartersImgs(startersNames, setStartersImgs);
  }, []);

  return {
    startersImgs,
  };
};
