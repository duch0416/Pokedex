import * as React from "react";
import  {useState} from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import Filters from "./Filters";
import {startersArray} from "../pokemonGenerations/components/StartersArrray"
import {Device} from "../enums/Device"
import GenerationBtn from "./GenerationBtn"
import { Paths } from "../navigation/Paths";

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


interface MainNavProps {
  active: boolean;
  generation: string;
}

const MainNav: React.SFC<MainNavProps> = ({ active, generation }) => {
  const [activegen, setActiveGen] = useState<string>(generation);

  return (
    <Wrapper active={active}>
      <GoToHomePage to={`${Paths.HOME}`}>Home Page</GoToHomePage>
      <Filters />
      {startersArray.map((genStarters: Array<string>, index) => {
        return (
          <GenerationBtn key={genStarters[0]} gen={`${index + 1}`} activegen={activegen} setActiveGen={setActiveGen}/>
        );
      })}
    </Wrapper>
  );
};

export default MainNav;
