import * as React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { Paths } from "../navigation/Paths";
import Filters from "./Filters";
import {startersArray} from "../pokemonGenerations/components/StartersArrray"
import {Device} from "../enums/Device"

const Wrapper = styled.div<{ active: boolean }>`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: flex-start;
  position: fixed;
  top: 0;
  right: 0;
  width: 180px;
  z-index: 3;
  transition: ease 0.2s;
  transform: ${({ active }) => (active ? "translateX(0)" : "translateX(100%)")};
  margin-top: 75px;
  @media ${Device.DESKTOP} {
    margin-top: 120px;
    transform: ${({ active }) => (active ? "translateX(-20%)" : "translateX(100%)")};
  }
`;
const GoToHomePage = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-decoration: none;
  color: #303943;
  background-color: #fff;
  width: 80%;
  height: 35px;
  border-radius: 20px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

const GenerationBtn = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #303943;
  background-color: #fff;
  margin-top: 10px;
  width: 40%;
  height: 35px;
  border-radius: 20px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  cursor: pointer;
`

interface MainNavProps {
  active: boolean;
}

const MainNav: React.SFC<MainNavProps> = ({ active }) => {
  return (
    <Wrapper active={active}>
      <GoToHomePage to={`${Paths.HOME}`}>Home Page</GoToHomePage>
      <Filters />
      {startersArray.map((genStarters: Array<string>, index) => {
        return (
          <GenerationBtn key={genStarters[0]} to={`${Paths.POKEMONS}/${index + 1}`}>
            {`Gen ${index + 1}`}
          </GenerationBtn>
        );
      })}
    </Wrapper>
  );
};

export default MainNav;
