import * as React from "react";
import styled from "styled-components";

import { Device } from "../../enums/Device";

const Wrapper = styled.div`
  background-color: #ffffff32;
  margin-top: 5px;
  width: min-content;
  padding: "3px 8px";
  border-radius: 38px;
  padding: 3px 8px;
  @media ${Device.MOBILE_M} {
    padding: 4px 12px;
  }
  @media ${Device.TABLET_L} {
    padding: 5px 14px;
  }
`;


const TypeTxt = styled.p`
  color: white;
  font-size: 0.6rem;
  @media ${Device.TABLET} {
    font-size: 0.9rem;
  }
  @media ${Device.TABLET_L} {
    font-size: 1.2rem;
  }
`;

export interface PokemonTypeProps {
  type: string;
}

const PokemonType: React.SFC<PokemonTypeProps> = ({ type }) => {
  return (
    <Wrapper>
      <TypeTxt>{type}</TypeTxt>
    </Wrapper>
  );
};

export default PokemonType;
