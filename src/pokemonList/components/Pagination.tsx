import * as React from "react";
import { useEffect } from "react";
import styled from "styled-components";

import { usePagination } from "../actions/usePagination";
import { usePokemonList } from "../actions/usePokemonList";

const PaginationNav = styled.nav`
  margin-bottom: 25px;
`;
const PageNumList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: center;
`;
const PageNumEl = styled.li`
  margin-right: 5px;
  margin-top: 5px;
  display: flex;
  width: 40px;
  height: 40px;
  border: 1px solid gray;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export interface PaginationProps {
  totalPokemons: number | undefined;
  pokemonsPerPage: any;
  paginate: any;
}

const Pagination: React.SFC<PaginationProps> = ({
  totalPokemons,
  pokemonsPerPage,
  paginate,
}) => {
  const pageNumbers = [];

  if (totalPokemons) {
    for (let i = 1; i <= Math.ceil(totalPokemons / pokemonsPerPage); i++) {
      pageNumbers.push(i);
    }
  }

  return (
    <PaginationNav>
      <PageNumList>
        {pageNumbers.map((pageNum: number) => {
          return (
            <PageNumEl key={pageNum} onClick={() => paginate(pageNum)}>
              {pageNum}
            </PageNumEl>
          );
        })}
      </PageNumList>
    </PaginationNav>
  );
};

export default Pagination;
