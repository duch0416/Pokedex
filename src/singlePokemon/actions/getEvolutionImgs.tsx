import { getEvolutionChain, getSinglePokemon} from "../../api/actions/getPokemonData";

export const getEvolutionImgs = async (pokemonName: string) => {
    const data = await getEvolutionChain(pokemonName);
    
    const firstForm = data.chain.species.name;
    const evolutionsNames = [firstForm]
    if(data.chain.evolves_to.length != 0) {
      const secondForm =  data.chain.evolves_to[0].species.name;
      evolutionsNames.push(secondForm)
      if(data.chain.evolves_to[0].evolves_to.length != 0){
        const thirdForm = data.chain.evolves_to[0].evolves_to[0].species.name;
        evolutionsNames.push(thirdForm)
      }
    }
    
    console.log(data)
    
   const imgs = await Promise.all(evolutionsNames.map(async (pokemonName: string) => {
        const pokemon = await getSinglePokemon(pokemonName)
        return   pokemon.sprites.front_default
    }))
    return{
    evolutionsNames,
    imgs
    }
  };
