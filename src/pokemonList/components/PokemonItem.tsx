import * as React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { usePokemonData } from "../../common/actions/usePokemonData";
import { ColorMap, Colors } from "../../enums/Colors";
import { Device } from "../../enums/Device";
import { paths } from "../../navigation/paths";
import PokemonType from "./PokemonType";
import PokemonId from "../../common/layout/PokemonId";
import PokemonName from "../../common/layout/PokemonName";
import CellBgc from "../../common/layout/CellBgc";


const Wrapper = styled(NavLink)<{ type: any }>`
  display: block;
  text-decoration: none;
  width: 150px;
  height: 111px;
  background-color: ${({ type }) => ColorMap.get(type)};
  border-radius: 20px;
  position: relative;
  padding: 20px 13px;
  box-sizing: border-box;
  overflow: hidden;
  transition: ease 0.2s;
  cursor: pointer;
  &:hover {
    transform: translatex(3%) translateY(-3%);
  }
  @media ${Device.MOBILE_M} {
    width: 160px;
    height: 120px;
    padding: 24px 16px;
  }
  @media ${Device.MOBILE_L} {
    width: 170px;
    height: 125px;
  }
  @media ${Device.TABLET} {
    width: 220px;
    height: 160px;
  }

  @media ${Device.TABLET_L} {
    width: 280px;
    height: 200px;
  }
`;

const PokebalImage = styled.img`
  width: 80px;
  height: 74px;
  position: absolute;
  right: -10%;
  bottom: -10%;
  opacity: 0.3;
  @media ${Device.TABLET} {
    width: 140px;
    height: 100px;
  }
  @media ${Device.TABLET_L} {
    width: 170px;
    height: 120px;
  }
`;

const IdContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 15px;
  @media ${Device.TABLET} {
    right: 20px;
  }
  @media ${Device.TABLET_L} {
    top: 20px;
    right: 30px;
  }
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
  @media ${Device.TABLET} {
    width: 130px;
    height: 130px;
  }
  @media ${Device.TABLET_L} {
    width: 160px;
    height: 160px;
  }
`;

const tText = styled.p`
  color: white;
  font-size: 8px;
`
export interface PokemonItemProps {
  generation: string;
  pokemonName: string;
  pokemon: any;
}

const PokemonItem: React.SFC<PokemonItemProps> = ({
  pokemonName,
  generation,
  pokemon
}) => {
  // const { pokemon } = usePokemonData(pokemonName);
  console.log(pokemon)
  
  return (
    <CellBgc type={pokemon.types[0]}>
      <Wrapper
        type={pokemon.types[0]}
        to={`${paths.POKEMONS}/${generation}/${pokemon.name}`}
      >
        <IdContainer>
          <PokemonId id={pokemon.id} />
        </IdContainer>
        <PokemonName name={pokemon.name} />
        <PokemonType type={pokemon.types[0]} />
        {pokemon.types[1] && <PokemonType type={pokemon.types[1]} />}
        <PokemonImage src={pokemon.img} />
        <PokebalImage src={"/images/pokeball.svg"} />
      </Wrapper>
    </CellBgc>
  );
};

export default PokemonItem;
