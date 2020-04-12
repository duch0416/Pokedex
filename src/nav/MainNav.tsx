import * as React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { Paths } from "../navigation/Paths";
import { Colors } from "../enums/Colors";

const Wrapper = styled.div<{ active: boolean }>`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  width: 150px;
  height: 100%;
  z-index: 3;
  transition: ease 0.2s;
  transform: ${({ active }) => (active ? "translateX(0)" : "translateX(100%)")};
`;
const GoToHomePage = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #303943;
  background-color: #fff;
  margin-top: 75px;
  width: 80%;
  height: 35px;
  border-radius: 20px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

export interface MainNavProps {
  active: boolean;
}

const MainNav: React.SFC<MainNavProps> = ({ active }) => {
  return (
    <Wrapper active={active}>
      <GoToHomePage to={`${Paths.HOME}`}>Home Page</GoToHomePage>

    </Wrapper>
  );
};

export default MainNav;
