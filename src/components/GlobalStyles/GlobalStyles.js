import { createGlobalStyle } from "styled-components";
import designTokens from "../../config/designTokens";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;500;700&display=swap');

  html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  body {
    background-color: ${designTokens.colors.grey050};
    font-family: Quicksand, Indie-Flower, sans-serif;
    font-weight: normal;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  * {
    min-height: 0;
  }
`;


export default GlobalStyles;