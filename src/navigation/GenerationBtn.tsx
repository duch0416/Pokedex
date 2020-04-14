import * as React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { Paths } from "../enums/Paths";

const GenBtn = styled(NavLink)<{ gen: string, activegen?: string }>`
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
  background-color: ${({ gen, activegen }) => (gen === activegen  ? "gray" : "white")};
  transition: ease 0.1s;
  &:hover {
      transform: scale(1.1)
  }
`;

interface GenerationBtnProps {
  gen: string;
  setActiveGen: (value: string) => void;
  activegen: string;
}

const GenerationBtn: React.SFC<GenerationBtnProps> = ({ gen, activegen, setActiveGen }) => {
  
  return (
    <GenBtn
      gen={gen}
      activegen={activegen}
      onClick={() => setActiveGen(gen)}
      to={`${Paths.POKEMONS}/${gen}/1`}
    >{`Gen ${gen}`}</GenBtn>
  );
};

export default GenerationBtn;
