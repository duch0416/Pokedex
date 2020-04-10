import * as React from "react";
import { useState } from "react";
import styled from "styled-components";

const Nav = styled.nav`
  padding-top: 40px;
`;
const PokeInfoList = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  border-bottom: 1px solid #f4f5f4;
`;

const PokeInfoEl = styled.li<{id: any, isActive: string}>`
  text-decoration: none;
  padding-bottom: 14px;
  opacity: 0.6;
  color: #303943;
  border-bottom: ${({id, isActive}) => id === isActive ? "2px solid #6C79DB" : ""};
`;

export interface PokemonInfoNavProps {}

const PokemonInfoNav: React.SFC<PokemonInfoNavProps> = () => {
const infoTexts = ['Base stats', 'Evolution']
const [isActive, setIsActive] = useState<string>("About");


  return (
    <Nav>
      <PokeInfoList>
        {infoTexts.map((text:string) => {
            return <PokeInfoEl key={text} id={text} isActive={isActive} onClick={() => setIsActive(text)}>{text}</PokeInfoEl>
        })}
      </PokeInfoList>
    </Nav>
  );
};

export default PokemonInfoNav;
