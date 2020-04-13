import { useState, useEffect, useContext } from "react";

import { filtersContext } from "../../store/store";
import { getPokemonArray } from "../../api/actions/getPokemonData";
import { getSinglePok } from "../../common/actions/getSinglePok";
import { setLimitAndOffset } from "./setLimitAndOffset";
import { getPokemonsPerPage } from "../actions/getPokemonsPerPage";


export const usePokemonList = (generation: string) => {
  const [pokemons, setPokemons] = useState<Array<any>>();
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage] = useState(20);
  const [totalPokemons, setTotalPokemons] = useState(100);
  const filtredPhrase = useContext(filtersContext).phrase;
  // console.log(filtredPhrase)

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const getPokemonList = async () => {
    const interval = setLimitAndOffset(generation);
    const data = await getPokemonArray(interval);

    setTotalPokemons(data.results.length);

    const poksPerPage = getPokemonsPerPage(data.results,currentPage,pokemonsPerPage);

    const poks = await Promise.all(
      poksPerPage.map(async (pokemon: any) => {
        const pok = await getSinglePok(pokemon.name);
        return pok;
      })
    );

    setPokemons(poks);
  };

  useEffect(() => {
    getPokemonList();
  }, [generation, currentPage, filtredPhrase]);

  return {
    pokemons,
    totalPokemons,
    pokemonsPerPage,
    paginate,
  };
};
