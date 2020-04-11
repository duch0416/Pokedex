import * as React from "react";
import {useEffect} from "react";
import styled from "styled-components";

import PokemonItem from "./PokemonItem";
import "../actions/usePokemonList";
import { usePokemonList } from "../actions/usePokemonList";

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
  const { pokemons } = usePokemonList(generation);

  return (
    <PokemonWrapper>
      {pokemons && pokemons.map((pokemon: any) => {
        console.log(pokemon)
        return <PokemonItem key={pokemon.id} pokemonName={pokemon.name} generation={generation} pokemon={pokemon}/>;
      })}
    </PokemonWrapper>
  );
};

export default PokemonList;
