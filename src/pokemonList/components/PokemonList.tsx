import * as React from "react";
import { useState, useRef, useEffect } from "react";
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

export interface PokemonListProps {
  generation: string;
}

const PokemonList: React.SFC<PokemonListProps> = ({ generation }) => {
  const { pokemons, totalPokemons, pokemonsPerPage, paginate } = usePokemonList(
    generation
  );


  return (
    <>
    <PokemonWrapper>
      {pokemons &&
        pokemons.map((pokemon: PokemonInterface) => {
          return (
            <PokemonItem
              key={pokemon.id}
              generation={generation}
              pokemon={pokemon}
            />
          );
        })}
    </PokemonWrapper>
    <Pagination
    totalPokemons={totalPokemons}
    pokemonsPerPage={pokemonsPerPage}
    paginate={paginate}
  />
  </>
  );
};

export default PokemonList;
