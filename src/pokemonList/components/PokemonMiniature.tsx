import * as React from "react";
import styled from "styled-components";

import { usePokemonData } from "../actions/usePokemonData";

const Wrapper = styled.div`
  width: 140px;
  height: 111px;
  background-color: green;
  border-radius: 25px;
`;
const PokemonInfoSection = styled.section`
  display: flex;
  flex-direction: column;
  padding-left: 16px;
`;
const PokemonName = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: white;
  text-transform: capitalize;
`;
const PokemonType = styled.p`
  color: white;
`;

export interface PokemonMiniatureProps {}

const PokemonMiniature: React.SFC<PokemonMiniatureProps> = () => {
  const { pokemon } = usePokemonData("bulbasaur");
  console.log(pokemon && pokemon.types[0]);
  return (
    <Wrapper>
      <PokemonInfoSection>
        <PokemonName>{pokemon && pokemon.name}</PokemonName>
      </PokemonInfoSection>
    </Wrapper>
  );
};

export default PokemonMiniature;
