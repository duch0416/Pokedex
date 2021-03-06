import * as React from "react";
import styled from "styled-components";

import PokebalImg from "../../common/layout/PokeballImg";
import ArrowImg from "../../common/layout/ArrowImg";
import {Device} from "../../enums/Device"

const EvolutionsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-content: center;
  padding-top: 15px;
  padding-bottom: 15px;

`;

const ImgsWrapper = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  @media ${Device.LAPTOP} {
    width: 130px;
    height: 130px;
  }
`;
const PokemonImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  @media ${Device.LAPTOP} {
    width: 130px;
    height: 130px;
  }
`;

const ArrowContainer = styled.div`
  margin-top: auto;
  margin-bottom: auto;
`;
const PokemonName = styled.p`
    padding: 6px 6px;
    text-align: center;
    height: 10%;
`

interface EvolutionFragmentProps {
  beforeEvolutionImg: string;
  afterEvolutionImg: string;
  beforeEvolutionName: string;
  afterEvolutionName: string;
}

const EvolutionFragment: React.SFC<EvolutionFragmentProps> = ({
  beforeEvolutionImg,
  afterEvolutionImg,
  beforeEvolutionName,
  afterEvolutionName,
}) => {
  return (
    <EvolutionsWrapper>
      <div>
        <ImgsWrapper>
          <PokebalImg color={"#F4F5F4"} />
          <PokemonImg src={beforeEvolutionImg} />
        </ImgsWrapper>
        <PokemonName>{beforeEvolutionName}</PokemonName>
      </div>
      <ArrowContainer>
        <ArrowImg color={"#DADADA"} />
      </ArrowContainer>
      <div>
        <ImgsWrapper>
          <PokebalImg color={"#F4F5F4"} />
          <PokemonImg src={afterEvolutionImg} />
        </ImgsWrapper>
        <PokemonName>{afterEvolutionName}</PokemonName>
      </div>
    </EvolutionsWrapper>
  );
};

export default EvolutionFragment;
