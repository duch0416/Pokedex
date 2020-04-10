import * as React from "react";
import styled from "styled-components";
import { RouteComponentProps } from "react-router-dom";

import { usePokemonData } from "../common/actions/usePokemonData";
import { ColorMap, Colors } from "../enums/Colors";
import BasicPokemonInfo from "../singlePokemon/components/BasicPokemonInfo";
import DetailPokemonInfo from "../singlePokemon/components/DetailPokemonInfo";


const Wrapper = styled.div<{ type: any }>`
  background-color: ${({ type }) => ColorMap.get(type)};
`;
const TopSection = styled.div`
  position: relative;
  padding: 60px 27px 0 27px;
  margin-bottom: 120px;
`;
const Arrow = styled.img`
  width: 22px;
  transform: rotate(180deg);
`;


export interface SinglePokemonProps {
  name: string;
}

const SinglePokemon: React.SFC<RouteComponentProps<SinglePokemonProps>> = (
  props
) => {
  const pokeName = props.match.params.name;
  const { pokemon } = usePokemonData(pokeName);
  

  return (
    <Wrapper type={pokemon.types[0]}>
      <TopSection>
        <Arrow src="/images/arrow.svg" />
        <BasicPokemonInfo pokemon={pokemon} />
      </TopSection>
      <DetailPokemonInfo pokemon={pokemon} />
    </Wrapper>
  );
};

export default SinglePokemon;
