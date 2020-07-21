import { createGlobalStyle } from "styled-components";
import designTokens from "../../config/designTokens";
import fonts from "../../index.module.css"

const GlobalStyles = createGlobalStyle`
  html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  body {
    background-color: ${designTokens.colors.grey050};
    font-family: Quicksand-Regular, Quicksand-Medium, Quicksand-Bold, sans-serif;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  * {
    min-height: 0;
  }
`;

export default GlobalStyles;
