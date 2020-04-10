import * as React from "react";
import styled from "styled-components";

import PokebalImg from "../../common/layout/PokeballImg";
import ArrowImg from "../../common/layout/ArrowImg";

const EvolutionsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding-top: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #f4f5f4;
`;

const PokemonFormWrapper = styled.div``;

const ImgsWrapper = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
`;
const PokemonImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

const ArrowContainer = styled.div`
  margin-top: auto;
  margin-bottom: auto;
`;
const PokemonName = styled.p`
    padding: 6px 6px;
    text-align: center;
`

export interface EvolutionFragmentProps {
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
      <PokemonFormWrapper>
        <ImgsWrapper>
          <PokebalImg color={"#F4F5F4"} />
          <PokemonImg src={beforeEvolutionImg} />
        </ImgsWrapper>
        <PokemonName>{beforeEvolutionName}</PokemonName>
      </PokemonFormWrapper>
      <ArrowContainer>
        <ArrowImg color={"#DADADA"} />
      </ArrowContainer>
      <PokemonFormWrapper>
        <ImgsWrapper>
          <PokebalImg color={"#F4F5F4"} />
          <PokemonImg src={afterEvolutionImg} />
        </ImgsWrapper>
        <PokemonName>{afterEvolutionName}</PokemonName>
      </PokemonFormWrapper>
    </EvolutionsWrapper>
  );
};

export default EvolutionFragment;
