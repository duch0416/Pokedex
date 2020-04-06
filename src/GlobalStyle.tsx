import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    font-family: 'Baloo Thambi 2';
  }
  button {
    padding: 0;
    cursor: pointer;
    font-family: 'Baloo Thambi 2';
  }
  p {
    font-size: 16px;
  }
  ul {
    padding: 0;
    margin: 0;
  }
`;
