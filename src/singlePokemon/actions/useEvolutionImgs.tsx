import { useState, useEffect } from "react";
import { getEvolutionChain, getSinglePokemon} from "../../api/actions/getPokemonData";


export const useEvolutionsImgs = (pokName:string) => {
  const [evolutionsImgs, setEvolutionImgs] = useState<Array<string>>([]);
  const [evolutionsNames, setEvolutionsNames] = useState<Array<string>>([]);

  
  const getEvolutionImg = async () => {
    console.log(pokName)
    const data = await getEvolutionChain(pokName);
    
    const firstForm = data.chain.species.name;
    const secondForm =  data.chain.evolves_to[0].species.name;
    const thirdForm = data.chain.evolves_to[0].evolves_to[0].species.name;

    const evolutions = [firstForm, secondForm, thirdForm]
    setEvolutionsNames(evolutions)

    evolutions.map(async (pokemonName: string) => {
        const pokemon = await getSinglePokemon(pokemonName)
        setEvolutionImgs((prevState: any) => {
            return [...prevState, pokemon.sprites.front_default]
        })
    })
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
