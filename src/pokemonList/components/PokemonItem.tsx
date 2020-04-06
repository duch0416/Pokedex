import * as React from "react";
import styled from "styled-components";

import { usePokemonData } from "../actions/usePokemonData";
import { ColorMap, Colors } from "../../enums/Colors";

const Wrapper = styled.div<{ type: any }>`
  width: 150px;
  height: 111px;
  background-color: ${({ type }) =>
   ( type === "water" || type ===  "fire" || type ===  "grass" || type ===  "electric" ) ? ColorMap.get(type) : "#c2b280"};
  border-radius: 20px;
  position: relative;
  padding: 20px 13px;
  box-sizing: border-box;
  margin-bottom: 10px;
  overflow: hidden;
`;

const PokemonName = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: white;
  text-transform: capitalize;
`;
const PokemonType = styled.div`
  background-color: #ffffff32;
  margin-top: 5px;
  width: min-content;
  padding: 3px 8px;
  border-radius: 38px;
  p {
    color: white;
    font-size: 8px;
  }
`;
const PokebalImage = styled.img`
  width: 80px;
  height: 74px;
  position: absolute;
  right: -10px;
  bottom: -10px;
  opacity: 0.3;
`;

const PokemonId = styled.div`
  font-size: 14px;
  color: ${Colors.BLACK + "36"};
  font-weight: 700;
  position: absolute;
  top: 10px;
  right: 15px;
`;

const PokemonImage = styled.img`
  width: 100px;
  height: 100px;
  margin: 0;
  transform: translatex(10%) translateY(8%);
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 2;
  /* background-color: white; */
`;

export interface PokemonItemProps {
  pokemonName: string;
}

const PokemonItem: React.SFC<PokemonItemProps> = ({ pokemonName }) => {
  const { pokemon } = usePokemonData(pokemonName);
  return (
    <Wrapper type={pokemon.types[0]}>
      <PokemonId>
        {pokemon.id < 100
          ? pokemon.id < 10
            ? `#00${pokemon.id}`
            : `#0${pokemon.id}`
          : `#${pokemon.id}`}
      </PokemonId>
      <PokemonName>{pokemon.name}</PokemonName>
      <PokemonType>
        <p>{pokemon.types[0]}</p>
      </PokemonType>
      {pokemon.types[1] && (
        <PokemonType>
          <p>{pokemon.types[1]}</p>
        </PokemonType>
      )}
      <PokemonImage src={pokemon.img} />
      <PokebalImage src={"images/pokeball.svg"} />
    </Wrapper>
  );
};

export default PokemonItem;
