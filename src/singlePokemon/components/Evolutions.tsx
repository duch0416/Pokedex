import * as React from "react";
import styled from "styled-components";
import { useContext } from "react";

import { pokemonContext } from "../../store/store";
import EvolutionFragment from "./EvolutionFragment";
import { Device } from "../../enums/Device";
import PokeballImg from "../../common/layout/PokeballImg";

const Wrapper = styled.div`
  width: 100%;
  margin-top: 15px;
  padding-bottom: 20px;
  position: relative;
  min-height: 200px;
  @media ${Device.TABLET} {
    width: 70%;
    margin: auto;
  }
  @media ${Device.LAPTOP} {
    width: 60%;
  }
  @media ${Device.DESKTOP} {
    width: 50%;
  }
`;
const Title = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
`;

const NoEvolutionsWrapper = styled.div`
  width: 150px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

const NoEvolutionsImg = styled.img`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

export interface EvolutionsProps {}

const Evolutions: React.SFC<EvolutionsProps> = () => {
  const evolutionData = useContext(pokemonContext).evolutionData;
  const evolutionsNames = evolutionData.evolutionsNames;
  const evolutionsImgs = evolutionData.imgs;

  return (
    <Wrapper>
      {evolutionsImgs[1] && <Title>Evulution Chain</Title>}
      {!evolutionsImgs[1] && (
        <NoEvolutionsWrapper>
          <PokeballImg color={"#dddddd"} />
          <NoEvolutionsImg src={evolutionsImgs[0]} alt="" />
        </NoEvolutionsWrapper>
      )}
      {evolutionsImgs[1] && (
        <EvolutionFragment
          beforeEvolutionImg={evolutionsImgs[0]}
          afterEvolutionImg={evolutionsImgs[1]}
          beforeEvolutionName={evolutionsNames[0]}
          afterEvolutionName={evolutionsNames[1]}
        />
      )}
      {evolutionsImgs[2] && (
        <EvolutionFragment
          beforeEvolutionImg={evolutionsImgs[1]}
          afterEvolutionImg={evolutionsImgs[2]}
          beforeEvolutionName={evolutionsNames[1]}
          afterEvolutionName={evolutionsNames[2]}
        />
      )}
    </Wrapper>
  );
};

export default Evolutions;
