import { useState, useEffect } from "react";

import { getPokemonArray } from "../../api/actions/getPokemonData";
import { getSinglePok } from "../../common/actions/getSinglePok";
import { setLimitAndOffset } from "./setLimitAndOffset";

export const usePokemonList = (generation: string) => {
  const [pokemons, setPokemons] = useState<Array<any>>();
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage] = useState(20);
  // const {getPokemonsPerPage} = usePagination(currentPage, setCurrentPage)
  const [totalPokemons, setTotalPokemons] = useState();

  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFisrtPokemon = indexOfLastPokemon - pokemonsPerPage;

  
  
  const getPokemonsPerPage = (pokemons: any) => {
    const currentPokemons = pokemons.slice(
      indexOfFisrtPokemon,
      indexOfLastPokemon
    );
    console.log(currentPokemons);
    return currentPokemons;
  };

  console.log(currentPage)

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };


  const getPokemonNameList = async () => {
    const interval = setLimitAndOffset(generation);
    const data = await getPokemonArray(interval);

    setTotalPokemons(data.results.length);
    const pokemonsPerPage = getPokemonsPerPage(data.results);
    const poks = await Promise.all(
      pokemonsPerPage.map(async (pokemon: any) => {
        const pok = await getSinglePok(pokemon.name);
        return pok;
      })
    );

    setPokemons(poks);
  };

  useEffect(() => {
    getPokemonNameList();
  }, [generation, currentPage]);

  return {
    pokemons,
    getPokemonNameList,
    totalPokemons,
    pokemonsPerPage,
    paginate
  };
};
