import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  body {
    font-family: Quicksand, sans-serif;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  * {
    min-height: 0;
  }
`;

export default GlobalStyles;
