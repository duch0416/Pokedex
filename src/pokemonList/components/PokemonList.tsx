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

export interface PokemonListProps {}

const PokemonList: React.SFC<PokemonListProps> = () => {
  const { pokemonsNameList } = usePokemonList({ limit: 50, offset: 0 });
  console.log(pokemonsNameList)
  return (
    <PokemonWrapper>

      {pokemonsNameList.map((pokemonName:string) => {
        return <PokemonItem key={pokemonName} pokemonName={pokemonName} />;
      })}

    </PokemonWrapper>
  );
};

export default PokemonList;
