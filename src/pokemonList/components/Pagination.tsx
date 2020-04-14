import * as React from "react";
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

export interface PaginationProps {
  totalPokemons: number | undefined;
  pokemonsPerPage: number;
  paginate(pageNum: number): void;
  generation: string;
  pageNum: string;
}

const Pagination: React.SFC<PaginationProps> = ({totalPokemons,pokemonsPerPage,paginate,generation,pageNum}) => {
  const [active, setActive] = useState(parseInt(pageNum));
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
            <PageNumEl
              key={pageNum}
              paginate={paginate}
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
