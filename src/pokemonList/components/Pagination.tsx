import * as React from "react";
import { useEffect } from "react";
import styled from "styled-components";

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
  &:hover {
      background-color: gray;
  }
`;
const ColorDiv = styled.div<{white?:string}>`
width: 100%;
height: 50%;
background-color: ${({white}) => white ? "white" : "red"};
`

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
