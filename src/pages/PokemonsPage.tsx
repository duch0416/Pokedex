import * as React from "react";
import {useState} from "react"
import styled from "styled-components";
import { RouteComponentProps } from "react-router-dom";

import PokemonList from "../pokemonList/components/PokemonList";
import { Device } from "../enums/Device";
import PokeballIcon from "../nav/PokeballIcon"
import MainNav from "../nav/MainNav"
import SpinningPokeball from "../common/layout/spinningPokeball"

const Wrapper = styled.div`
  box-sizing: border-box;
  position: relative;
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
  }
  @media ${Device.DESKTOP_VERY_L} {
    width: 84%;
  }
  @media ${Device.WQHD} {
    width: 75%;
  }
  @media ${Device.UHD} {
    width: 70%;
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
`;


interface PokemonsPageProps {
  generation: string;
}

const PokemonsPage: React.SFC<RouteComponentProps<PokemonsPageProps>> = (
  props
) => {
  const generation = props.match.params.generation;
  const [navActive, setNavActive] = useState<boolean>(false)
  
  return (
    <Wrapper>
      <PokeballIcon navActive={navActive} setNavActive={setNavActive}/>
      <MainNav active={navActive}/>
      <Nav />
      <Title>
        {generation === "8" ? "All Pokemons" : `generation ${generation}`}
      </Title>
      <PokemonList generation={generation} />
    </Wrapper>
  );
};

export default PokemonsPage;
