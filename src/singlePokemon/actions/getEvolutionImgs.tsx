import { getEvolutionChain, getSinglePokemon} from "../../api/actions/getPokemonData";

export const getEvolutionImgs = async (pokemonName: string) => {
    const data = await getEvolutionChain(pokemonName);
    
    const firstForm = data.chain.species.name;
    const secondForm =  data.chain.evolves_to[0].species.name;
    const thirdForm = data.chain.evolves_to[0].evolves_to[0].species.name;
    
    
    const evolutionsNames = [firstForm, secondForm, thirdForm]
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
