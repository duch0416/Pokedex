import * as React from "react";
import styled from "styled-components";
import {useContext} from "react"

import {pokemonContext} from "../../store/store";
import EvolutionFragment from "./EvolutionFragment";



const Wrapper = styled.div`
  width: 100%;
  margin-top: 15px;
`;
const Title = styled.h3`
  font-weight: 600;
`;



export interface EvolutionsProps {
    
}

const Evolutions: React.SFC<EvolutionsProps> = () => {
  const evolutionData = useContext(pokemonContext).evolutionData
  const evolutionsNames = evolutionData.evolutionsNames
  const evolutionsImgs = evolutionData.imgs

  
  return (
    <Wrapper>
      <Title>Evulution Chain</Title>
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
