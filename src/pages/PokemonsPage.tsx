import * as React from "react";
import styled from "styled-components";
import { RouteComponentProps } from "react-router-dom";

import PokemonList from "../pokemonList/components/PokemonList";
import PokeballImg from "../common/layout/PokeballImg"
import {Device} from "../enums/Device"


const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding-left: 3px;
  padding-right: 3px;
  overflow: hidden;
  @media ${Device.MOBILE_M} {
    padding-left: 20px;
    padding-right: 20px;
  }
  @media ${Device.MOBILE_L} {
    padding-left: 28px;
    padding-right: 28px;
  }
  @media ${Device.TABLET_L} {
    padding-left: 40px;
    padding-right: 40px;
  }
  @media ${Device.DESKTOP} {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
  @media ${Device.DESKTOP_L} {
    width: 88%;
    margin-left: auto;
    margin-right: auto;
  }
`;

const Title = styled.h1`
  color: #303943;
  font-size: 30px;
  margin-bottom: 20px;
  margin-left: 15px;
  font-family: "Pokemon";
  letter-spacing: 3px;
  @media ${Device.TABLET} {
    font-size: 40px;
    margin-bottom: 30px;
    margin-top: 20px;
    margin-left: 30px;
  }
  @media ${Device.TABLET_L} {
    font-size: 50px;
    margin-bottom: 30px;
    margin-top: 30px;
    margin-left: 30px;
  }
  @media ${Device.DESKTOP} {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
`;
const Nav = styled.div`
  width: 100%;
  height: 15%;
`

export interface PokemonsPageProps {
  generation: string;
}

const PokemonsPage: React.SFC<RouteComponentProps<PokemonsPageProps>> = (props) => {
  const generation = props.match.params.generation

  return (
    <Wrapper>
      <Nav/>
      {/* <PokeballImg color="#3039430f"/> */}
      <Title>Pokedex</Title>
      <PokemonList generation={generation}/>
    </Wrapper>
  
  );
};

export default PokemonsPage;
