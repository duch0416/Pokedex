import { useState, useEffect, useReducer } from "react";

import {PokemonReducer, initialStatsState} from "../../store/PokemonReducer"
import {setPokemonData} from "../../store/Actions"
import {getSinglePok} from "../../common/actions/getSinglePok"
import {getEvolutionImgs} from "./getEvolutionImgs"

interface PokemonMinInterface {
  id: number;
  name: string;
  img: string;
  types: Array<string>;
}


export const usePokemonData = (pokemonName: string) => {
  const [state, dispatch] = useReducer(PokemonReducer, initialStatsState)
  let isCanceled = false;
  const [pokemon, setPokemon] = useState<PokemonMinInterface>({
    id: 1,
    name: "bulbasaurs",
    img:
      "",
    types: ["grass", "poison"],
  });
  
  const getPok = async() => {
   const pok = await getSinglePok(pokemonName)
   const evolutionData = await getEvolutionImgs(pokemonName)
   dispatch(setPokemonData(pok.stats, evolutionData))
   
   setPokemon(pok)
  }
 
  
  useEffect(() => {
    if(!isCanceled){
      getPok()
    }
    isCanceled = false;
  },[pokemonName])

  return {
    pokemon,
  }
};
