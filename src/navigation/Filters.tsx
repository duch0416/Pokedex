import * as React from "react";
import { useState } from "react";
import styled from "styled-components";

import { NavLink, useLocation } from "react-router-dom";

const FilterByNamseScetion = styled.div`
  display: flex;
  justify-content: center;
`;
const FilterByName = styled.input`
  width: 70%;
  outline: none;
  text-align: center;
  background-color: #fff;
  margin-top: 10px;
  height: 35px;
  width: 100px;
  border: none;
  border-radius: 20px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
`;
const Btn = styled(NavLink)`
  outline: none;
  text-align: center;
  background-color: #fff;
  margin-top: 10px;
  height: 30px;
  width: 30px;
  border: none;
  border-radius: 30px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
`;


const Filters: React.SFC = () => {
  const [phrase, setPhrase] = useState("");
  const location = useLocation();

  const handleTyping = (e: any) => {
    setPhrase(e.target.value);
  };

  return (
    <>
      <FilterByNamseScetion>
        <FilterByName placeholder="pokemon name" onChange={handleTyping} />
      </FilterByNamseScetion>
      <Btn to={`${location.pathname}/${phrase.toLowerCase()}`}>
        <img src="/images/send.svg" alt="" />
      </Btn>
    </>
  );
};

export default Filters;
