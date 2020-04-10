import { useState, useEffect, useReducer } from "react";

import { getSinglePokemon } from "../../api/actions/getPokemonData";
import {statsReducer, initialState} from "../../store/statsReducer"
import {setPokemonStats} from "../../store/Actions"

interface PokemonMinInterface {
  id: number;
  name: string;
  img: string;
  types: Array<string>;
}

export const usePokemonData = (pokemonName: string) => {
  const [state, dispatch] = useReducer(statsReducer, initialState)
  const [pokemon, setPokemon] = useState<PokemonMinInterface>({
    id: 1,
    name: "bulbasaur",
    img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    types: ["grass", "poison"],
  });
  
  const getPokemonData = async () => {
    const data = await getSinglePokemon(pokemonName);
    // console.log(data)
    dispatch(setPokemonStats(data.stats))
    
    let orderedTypesArray
    const typesNameArray = data.types.map((data: any) => {
      return data.type.name;
    })
    
    if(data.types[0].slot === 2){
      orderedTypesArray = typesNameArray.reverse()
    }else {
      orderedTypesArray = typesNameArray
    }


    setPokemon({
      id: data.id,
      name: data.name,
      img: data.sprites.front_default,
      types: orderedTypesArray
    });

  };

  useEffect(() => {
    let isCanceled = false;
    if(!isCanceled){
    getPokemonData();
    }
    return () => {
      isCanceled = true;
    }
  }, []);

  return {
    pokemon,
  };
};
