import * as React from 'react';
import {useEffect} from "react";
import styled from "styled-components"
import {  NavLink } from "react-router-dom";

import {Paths} from "../../navigation/Paths"

const PageNumButton = styled(NavLink)<{pageNum: number, active:number}>`
  margin-right: 5px;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  width: 40px;
  height: 40px;
  border-radius: 30px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  border: 1px solid gray;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  transition: ease 0.2s;
  text-decoration: none;
  color: black;
  background-color: ${({pageNum, active}) => (pageNum === active) ? "gray" : "white"};
  &:hover {
        transform: scale(1.1);
  }
`;


export interface PageNumElProps {
    pageNum: number;
    paginate: any;
    generation: string;
    setActive: (pageNum: number) => void;
    active: number;
}

const PageNumEl: React.SFC<PageNumElProps> = ({pageNum, paginate, generation, setActive, active}) => {
    
    const handleClick = () => {
        setActive(pageNum)
    }
    // useEffect(() => {
    //     setActive(1)
    // },[generation])
    
    return ( 
        <PageNumButton pageNum={pageNum} active={active} onClick={handleClick}  to={`${Paths.POKEMONS}/${generation}/${pageNum}`}>
              {pageNum}
        </PageNumButton>
     );
}
 
export default PageNumEl;