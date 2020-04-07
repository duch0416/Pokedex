import * as React from "react";
import styled from "styled-components";

import PokemonGenerationCell from "../pokemonGenerations/components/PokemonGenerationCell";
import { Device } from "../enums/Device";
import { startersArray } from "../pokemonGenerations/components/StartersArrray";



const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 25px;
  box-sizing: border-box;
  width: 100%;
  padding: 10px 7px 10px 7px;
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

const Title = styled.h2`
  color: #303943;
  font-size: 40px;
  font-family: "Pokemon";
  letter-spacing: 4px;
  width: 100%;
  text-align: center;
`;

export interface HomePageProps {}

const HomePage: React.SFC<HomePageProps> = () => {
  
  return (
    <Wrapper>
      <Title>Pokedex</Title>
      {startersArray.map((genStarters: Array<string>, index) => {
        return (
          <PokemonGenerationCell
            title={`Generation ${index + 1}`}
            pokemonsNames={genStarters} 
            genNum={index + 1}
            key={index}
          />
        );
      })}
      <PokemonGenerationCell
        title="All Pokemons"
        pokemonsNames={["treecko", "charmander", "froakie"]}
        genNum={8}
      />
      <PokemonGenerationCell
        title="Who's That Pokemon?"
        pokemonsNames={["treecko", "charmander", "froakie"]}
        dark="dark"
        genNum={9}
      />
    </Wrapper>
    
  );
};

export default HomePage;
