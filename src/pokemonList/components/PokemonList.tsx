import * as React from "react";
import {useRef, useState} from "react"
import styled from "styled-components";

import PokemonItem from "./PokemonItem";
import "../actions/usePokemonList";
import Pagination from "./Pagination"
import { usePokemonList } from "../actions/usePokemonList";
import {PokemonInterface} from "../../singlePokemon/actions/usePokemonData"

const PokemonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  flex-wrap: wrap;
`;

export interface PokemonListProps {
  generation: string;
}

const PokemonList: React.SFC<PokemonListProps> = ({generation}) => {
  const { pokemons, totalPokemons, pokemonsPerPage, paginate } = usePokemonList(generation);
  const [itemsOnScreen, setItemsOnScreen] = useState()
  const PokemonWrapperRef = useRef(null)

  return (
    <PokemonWrapper ref={PokemonWrapperRef}>
      {pokemons && pokemons.map((pokemon: PokemonInterface) => {
        return <PokemonItem key={pokemon.id} pokemonName={pokemon.name} generation={generation} pokemon={pokemon}/>;
      })}
      <Pagination totalPokemons={totalPokemons} pokemonsPerPage={pokemonsPerPage} paginate={paginate}/>
    </PokemonWrapper>
  );
};

export default PokemonList;
