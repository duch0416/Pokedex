import * as React from "react";
import styled from "styled-components";

import PokemonList from "../pokemonList/components/PokemonList";
import PokeballImg from "../common/PokeballImg"

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding-left: 3px;
  padding-right: 3px;
  overflow: hidden;
`;

const Title = styled.h1`
  color: #303943;
  font-size: 30px;
  margin-bottom: 20px;
`;
const Nav = styled.div`
  width: 100%;
  height: 15%;
`

export interface PokemonsPageProps {}

const PokemonsPage: React.SFC<PokemonsPageProps> = () => {
  return (
    <Wrapper>
      <Nav/>
      {/* <PokeballImg color="#3039430f"/> */}
      <Title>Pokedex</Title>
      <PokemonList />
    </Wrapper>
  );
};

export default PokemonsPage;
