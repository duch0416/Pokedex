import * as React from "react";
import styled from "styled-components";

import {InfoType} from "../../enums/InfoType"
import {Device} from "../../enums/Device"

const Nav = styled.nav`
  padding-top: 40px;
`;
const PokeInfoList = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  border-bottom: 1px solid #f4f5f4;
`;

const PokeInfoEl = styled.li<{ id: any; isActive: string }>`
  text-decoration: none;
  padding-bottom: 14px;
  opacity: 0.6;
  color: #303943;
  cursor: pointer;
  border-bottom: ${({ id, isActive }) =>
    id === isActive ? "2px solid #6C79DB" : "none"};
  @media ${Device.MOBILE_L}{
    font-size: 1.3rem;
    font-weight: 400;
  }
`;

export interface PokemonInfoNavProps {
  isActive: string;
  setIsActive: (value: string) => void;
}

const PokemonInfoNav: React.SFC<PokemonInfoNavProps> = ({isActive, setIsActive}) => {
  const infoTexts = [InfoType.BASE_STATS, InfoType.EVOLUTIONS];

  return (
    <Nav>
      <PokeInfoList>
        {infoTexts.map((text: string) => {
          return (
            <PokeInfoEl
              key={text}
              id={text}
              isActive={isActive}
              onClick={() => setIsActive(text)}
            >
              {text}
            </PokeInfoEl>
          );
        })}
      </PokeInfoList>
    </Nav>
  );
};

export default PokemonInfoNav;
