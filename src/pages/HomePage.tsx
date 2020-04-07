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
      {/* <PokemonGenerationCell title="Generation 1" pokemonsNames={["bulbasaur", "charmander", "squirtle"]}/>
      <PokemonGenerationCell title="Generation 2" pokemonsNames={["chikorita", "cyndaquil", "totodile"]}/>
      <PokemonGenerationCell title="Generation 3" pokemonsNames={["treecko", "torchic", "mudkip"]}/>
      <PokemonGenerationCell title="Generation 4" pokemonsNames={["turtwig", "chimchar", "piplup"]}/>
      <PokemonGenerationCell title="Generation 5" pokemonsNames={[ "snivy", "tepig", "oshawott"]}/>
      <PokemonGenerationCell title="Generation 6" pokemonsNames={["chespin", "fennekin", "froakie"]}/>
      <PokemonGenerationCell title="Generation 7" pokemonsNames={["rowlet", "litten", "popplio"]} gen7="gen7"/>
      <PokemonGenerationCell title="All Pokemons" pokemonsNames={["treecko", "charmander", "froakie"]}/>
      <PokemonGenerationCell title="Who's That Pokemon?" pokemonsNames={["treecko", "charmander", "froakie"]}/> */}
      {startersArray.map((genStarters: Array<string>, index) => {
        return (
          <PokemonGenerationCell
            title={`Generation ${index + 1}`}
            pokemonsNames={genStarters} 
          />
        );
      })}
      <PokemonGenerationCell
        title="All Pokemons"
        pokemonsNames={["treecko", "charmander", "froakie"]}

      />
      <PokemonGenerationCell
        title="Who's That Pokemon?"
        pokemonsNames={["treecko", "charmander", "froakie"]}
        dark="dark"
      />
    </Wrapper>
  );
};

export default HomePage;
