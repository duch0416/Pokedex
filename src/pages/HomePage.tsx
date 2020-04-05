import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100px;
  width: 100px;
  background-color: green;
`;

export interface HomePageProps {}

const HomePage: React.SFC<HomePageProps> = () => {
  return <Wrapper></Wrapper>;
};

export default HomePage;
