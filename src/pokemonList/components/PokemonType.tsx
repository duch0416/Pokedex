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
