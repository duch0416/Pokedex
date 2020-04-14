import * as React from "react";
import styled from "styled-components";

import PokemonGenerationCell from "../pokemonGenerations/components/PokemonGenerationCell";
import { Device } from "../enums/Device";
import { startersArray } from "../pokemonGenerations/components/StartersArrray";



const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
  justify-content: space-around;
  align-content: center;
  box-sizing: border-box;
  width: 100%;
  padding: 10px 7px 10px 7px;
  @media ${Device.MOBILE_M} {
    padding-left: 20px;
    padding-right: 20px;
  }
  @media ${Device.MOBILE_L} {
    width: 95%;
    margin-left: auto;
    margin-right: auto;
  }
  @media ${Device.TABLET} {
    width: 70%;
  }
  @media ${Device.TABLET_L} {
    width: 60%;
  }
  @media ${Device.LAPTOP} {
    width: 85%;
  }

  @media ${Device.DESKTOP} {
    width: 75%;
  }
  @media ${Device.DESKTOP_L} {
    width: 60%;
  }
  @media ${Device.DESKTOP_VERY_L} {
    width: 50%;
  }
  @media ${Device.WQHD}{
    width: 35%;
  }
  @media ${Device.UHD}{
    width: 30%;
  }
`;

const Title = styled.h2`
  color: #303943;
  font-size: 40px;
  letter-spacing: 4px;
  width: 100%;
  text-align: center;
  @media ${Device.MOBILE_M} {
    margin-bottom: 15px;
  }
  @media ${Device.TABLET} {
    margin-bottom: 20px;
  }
  @media ${Device.TABLET_L} {
    margin-bottom: 30px;
  }
`;


const HomePage: React.SFC = () => {
  
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
    </Wrapper>
    
  );
};

export default HomePage;
