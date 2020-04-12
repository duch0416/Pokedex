import { useState, useEffect, useReducer } from "react";

import {PokemonReducer, initialStatsState} from "../../store/PokemonReducer"
import {setPokemonData} from "../../store/Actions"
import {getSinglePok} from "../../common/actions/getSinglePok"
import {getEvolutionImgs} from "./getEvolutionImgs"
import {evolutionDataType} from "../../types/Types"

export interface PokemonInterface {
  id: number;
  name: string;
  img: string;
  types: Array<string>;
  stats: Array<string>;
}


export const usePokemonData = (pokemonName: string) => {
  const [state, dispatch] = useReducer(PokemonReducer, initialStatsState)
  let isCanceled = false;
  const [pokemon, setPokemon] = useState<PokemonInterface>({
    id: 0,
    name: "",
    img:"",
    types: [],
    stats: []
  });
  
  const getPok = async() => {
   const pok = await getSinglePok(pokemonName)
   setPokemon(pok)

   const evolutionData:any = await getEvolutionImgs(pokemonName)
   dispatch(setPokemonData(pok.stats, evolutionData))
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
