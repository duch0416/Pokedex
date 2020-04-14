import * as React from "react";
import styled from "styled-components";

import PokemonItem from "./PokemonItem";
import "../actions/usePokemonList";
import Pagination from "./Pagination";
import { usePokemonList } from "../actions/usePokemonList";
import { PokemonInterface } from "../../types/Types";

const PokemonWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-around;
`;

interface PokemonListProps {
  generation: string;
  pageNum: string;
}

const PokemonList: React.SFC<PokemonListProps> = ({ generation, pageNum }) => {
  const {pokemons,totalPokemons,pokemonsPerPage, currentPage,} = usePokemonList(generation, pageNum);

  return (
    <>
      <PokemonWrapper>
        {pokemons &&
          pokemons.map((pokemon: PokemonInterface) => {
            return (
              <PokemonItem
                key={pokemon.id}
                generation={generation}
                currentPage={currentPage}
                pokemon={pokemon}
              />
            );
          })}
      </PokemonWrapper>
      <Pagination
        totalPokemons={totalPokemons}
        pokemonsPerPage={pokemonsPerPage}
        generation={generation}
        pageNum={pageNum}
      />
    </>
  );
};

export default PokemonList;
