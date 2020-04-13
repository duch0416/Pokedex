import { useState, useEffect, useReducer } from "react";

import {PokemonReducer,initialPokemonsState} from "../../store/PokemonReducer";
import { setPokemonData } from "../../store/Actions";
import { getSinglePok } from "../../common/actions/getSinglePok";
import { getEvolutionImgs } from "./getEvolutionImgs";
import { PokemonInterface } from "../../types/Types";

export const usePokemonData = (pokemonName: string) => {
  const [state, dispatch] = useReducer(PokemonReducer, initialPokemonsState);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchingError, setFetchingError] = useState("")
  const [pokemon, setPokemon] = useState<PokemonInterface>({
    id: 0,
    name: "",
    img: "",
    types: [],
    stats: [],
  });

  const getPok = async () => {
    setIsLoading(true);
    try {
      const pok = await getSinglePok(pokemonName);
      setPokemon(pok);
      const evolutionData: any = await getEvolutionImgs(pokemonName);
      dispatch(setPokemonData(pok.stats, evolutionData));
    } catch (err) {
      setFetchingError(err)
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getPok();
  }, [pokemonName]);

  return {
    pokemon,
    isLoading,
    fetchingError
  };
};
