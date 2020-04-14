import { useState, useEffect} from "react";

import { getPokemonArray } from "../../api/actions/getPokemonData";
import { getSinglePok } from "../../common/actions/getSinglePok";
import { setLimitAndOffset } from "./setLimitAndOffset";
import { getPokemonsPerPage } from "../actions/getPokemonsPerPage";


export const usePokemonList = (generation: string, pageNumber:string) => {
  const [pokemons, setPokemons] = useState<Array<any>>();
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage] = useState(20);
  const [totalPokemons, setTotalPokemons] = useState(100);

  const paginate = () => {
      setCurrentPage(parseInt(pageNumber));
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
    if(pageNumber === "1"){
      setCurrentPage(1)
    }
    paginate()
    getPokemonList();
  }, [generation, currentPage, pageNumber]);

  return {
    pokemons,
    totalPokemons,
    pokemonsPerPage,
    currentPage,
    paginate,
  };
};
