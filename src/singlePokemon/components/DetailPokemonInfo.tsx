import * as React from "react";
import styled from "styled-components";

import PokemonInfoNav from "./PokemonInfoNav"
import PokemonStats from "./PokemonStats"
import Evolutions from "./Evolutions"

const Wrapper = styled.div`
  position: relative;
  height: 300px;
  background-color: white;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding-left: 27px;
  padding-right: 27px;
`;

const ImgsWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 150px;
  top: 0;
  left: 0;
  /* background-color: red; */
  transform: translateY(-65%);
`;
const PokemonImg = styled.img`
  width: 150px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`;


export interface DetailPokemonInfoProps {
  pokemon: any;
}

const DetailPokemonInfo: React.SFC<DetailPokemonInfoProps> = ({ pokemon }) => {

  return (
    <Wrapper>
      <ImgsWrapper>
        <PokemonImg src={pokemon.img} />
      </ImgsWrapper>
      <PokemonInfoNav></PokemonInfoNav>
      <PokemonStats/>
      <Evolutions/>
    </Wrapper>
  );
};

export default DetailPokemonInfo;
