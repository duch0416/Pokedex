import * as React from "react";
import { useReducer, useState } from "react";
import styled from "styled-components";

import { initialFiltersState, FiltersReducer } from "../store/FilersReducer";
import { setFilterData } from "../store/Actions";

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
const Btn = styled.button`
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
  const [state, dispatch] = useReducer(FiltersReducer, initialFiltersState);
  const [phrase, setPhrase] = useState("");

  const handleTyping = (e: any) => {
    setPhrase(e.target.value);
  };
  const handleSumbit = () => {
    dispatch(setFilterData(phrase));
    setPhrase("");
  };

  return (
    <>
      <FilterByNamseScetion>
        <FilterByName placeholder="pokemon name" onChange={handleTyping} />
      </FilterByNamseScetion>
      <Btn onClick={handleSumbit}>
        <img src="/images/send.svg" alt="" />
      </Btn>
    </>
  );
};

export default Filters;
