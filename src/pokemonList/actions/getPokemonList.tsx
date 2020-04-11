import {useState} from "react"

import {getSinglePokemon} from "../../api/actions/getPokemonData"
    

  
  export const getPokemonList = async (pokemonName: string) => {
    const data = await getSinglePokemon(pokemonName);
    
    let orderedTypesArray
    const typesNameArray = data.types.map((data: any) => {
      return data.type.name;
    })
    
    if(data.types[0].slot === 2){
      orderedTypesArray = typesNameArray.reverse()
    }else {
      orderedTypesArray = typesNameArray
    }
    const pokemon = {
        id: data.id,
        name: data.name,
        img: data.sprites.front_default,
        types: orderedTypesArray
      }
    
    return pokemon ;

  };

