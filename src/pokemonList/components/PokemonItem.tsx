import * as React from "react";
import styled from "styled-components";

import { usePokemonData } from "../actions/usePokemonData";
import { ColorMap, Colors } from "../../enums/Colors";
import { Device } from "../../enums/Device";

const Background = styled.div<{ type: any }>`
    background-color:  ${({ type }) => `${ColorMap.get(type)}61`};
    border-radius: 20px;
    margin-bottom: 10px;
    @media ${Device.TABLET} {
    margin-bottom: 15px;
  }

  @media ${Device.TABLET_L} {
    margin-bottom: 20px;
  }
`

const Wrapper = styled.div<{ type: any }>`
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
    transform: translatex(3%) translateY(-3%)
  }
  @media ${Device.MOBILE_M} {
    width: 160px;
    height: 120px;
    padding: 24px 16px;
  }
  @media ${Device.MOBILE_L} {
    width: 170px;
    height: 125px;
    padding-left: 28px;
    padding-right: 28px;
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

const PokemonName = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: white;
  text-transform: capitalize;
  @media ${Device.MOBILE_L} {
    font-size: 16px;
  }
  @media ${Device.TABLET} {
    font-size: 20px;
  }
  @media ${Device.TABLET_L} {
    font-size: 24px;
  }
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
    @media ${Device.MOBILE_L} {
      font-size: 11px;
    }
    @media ${Device.TABLET} {
      font-size: 15px;
    }
    @media ${Device.TABLET_L} {
      font-size: 18px;
    }
  }
  @media ${Device.MOBILE_M} {
    padding: 4px 12px;
  }
  @media ${Device.TABLET_L} {
    padding: 5px 14px;
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

const PokemonId = styled.div`
  font-size: 14px;
  color: ${Colors.BLACK + "36"};
  font-weight: 700;
  position: absolute;
  top: 10px;
  right: 15px;
  @media ${Device.TABLET} {
    right: 20px;
    font-size: 18px;
  }
  @media ${Device.TABLET_L} {
    top: 20px;
    right: 30px;
    font-size: 20px;
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

export interface PokemonItemProps {
  pokemonName: string;
}

const PokemonItem: React.SFC<PokemonItemProps> = ({ pokemonName }) => {
  const { pokemon } = usePokemonData(pokemonName);

  return (
    <Background type={pokemon.types[0]}>
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
    </Background>
  );
};

export default PokemonItem;
