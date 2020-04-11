import { useState, useEffect } from "react";
import { getEvolutionChain, getSinglePokemon} from "../../api/actions/getPokemonData";


export const useEvolutionsImgs = (pokName:string) => {
  const [evolutionsImgs, setEvolutionImgs] = useState<Array<string>>([]);
  const [evolutionsNames, setEvolutionsNames] = useState<Array<string>>([]);

  
  const getEvolutionImg = async () => {
    const data = await getEvolutionChain("bulbasaur");
    
    const firstForm = data.chain.species.name;
    const secondForm =  data.chain.evolves_to[0].species.name;
    const thirdForm = data.chain.evolves_to[0].evolves_to[0].species.name;
    
    
    const evolutions = [firstForm, secondForm, thirdForm]
    setEvolutionsNames(evolutions)

   const imgs = await Promise.all(evolutions.map(async (pokemonName: string) => {
        const pokemon = await getSinglePokemon(pokemonName)
        return   pokemon.sprites.front_default
    }))

    setEvolutionImgs(imgs)
    // console.log(imgs)
  };


  useEffect(() => {
    let isCanceled = false;
    if (!isCanceled) {
      getEvolutionImg();
    }

    return () => {
      isCanceled = true;
    };
  }, []);
  return {
    evolutionsImgs,
    evolutionsNames
  };
};
