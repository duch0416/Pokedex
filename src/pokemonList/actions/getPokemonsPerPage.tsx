export const getPokemonsPerPage = (pokemons: any, currentPage: number, pokemonsPerPage: number) => {
    const indexOfLastPokemon = currentPage * pokemonsPerPage;
    const indexOfFisrtPokemon = indexOfLastPokemon - pokemonsPerPage;
    return pokemons.slice(indexOfFisrtPokemon, indexOfLastPokemon)
};
