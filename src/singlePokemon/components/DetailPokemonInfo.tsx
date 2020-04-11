import * as React from "react";
import { useState } from "react";
import styled from "styled-components";

import PokemonInfoNav from "./PokemonInfoNav";
import PokemonStats from "./PokemonStats";
import Evolutions from "./Evolutions";
import {InfoType} from "../../enums/InfoType"
import { Device} from "../../enums/Device";

const Wrapper = styled.div`
  position: relative;
  background-color: white;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding-left: 27px;
  padding-right: 27px;
  @media ${Device.TABLET} {
    border-radius: 30px;
  }
`;

const DetailInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media ${Device.TABLET} {
    min-height: 400px;
  }
`

const ImgsWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 150px;
  top: 0;
  left: 0;
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
  const [isActive, setIsActive] = useState<string>(InfoType.BASE_STATS);

  return (
    <Wrapper>
      <ImgsWrapper>
        <PokemonImg src={pokemon.img} />
      </ImgsWrapper>
      <PokemonInfoNav isActive={isActive} setIsActive={setIsActive} />
      <DetailInfoWrapper>
      {isActive === InfoType.BASE_STATS ? <PokemonStats /> : <Evolutions />}
      </DetailInfoWrapper>
    </Wrapper>
  );
};

export default DetailPokemonInfo;
