import * as React from "react";
import {useEffect} from "react";
import styled from "styled-components";
import { useState} from "react";

import PageNumEl from "./PageNumEl";

const PaginationNav = styled.nav`
  margin-bottom: 25px;
`;
const PageNumList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: center;
`;

interface PaginationProps {
  totalPokemons: number | undefined;
  pokemonsPerPage: number;
  generation: string;
  pageNum: string;
}

const Pagination: React.SFC<PaginationProps> = ({totalPokemons,pokemonsPerPage,generation,pageNum}) => {
  const [active, setActive] = useState(1);
  const pageNumbers = [];

  if (totalPokemons) {
    for (let i = 1; i <= Math.ceil(totalPokemons / pokemonsPerPage); i++) {
      pageNumbers.push(i);
    }
  }

  useEffect(() => {
    setActive(parseInt(pageNum))
},[generation])

  return (
    <PaginationNav>
      <PageNumList>
        {pageNumbers.map((pageNum: number) => {
          return (
            <PageNumEl
              key={pageNum}
              pageNum={pageNum}
              generation={generation}
              setActive={setActive}
              active={active}
            />
          );
        })}
      </PageNumList>
    </PaginationNav>
  );
};

export default Pagination;
