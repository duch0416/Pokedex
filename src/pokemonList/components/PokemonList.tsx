import * as React from "react";
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
  const { pokemonsNameList } = usePokemonList(generation);
  

  return (
    <PokemonWrapper>
      {pokemonsNameList.map((pokemonName: string) => {
        return <PokemonItem key={pokemonName} pokemonName={pokemonName} generation={generation}/>;
      })}
    </PokemonWrapper>
  );
};

export default PokemonList;
