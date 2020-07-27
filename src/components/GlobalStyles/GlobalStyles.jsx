import { createGlobalStyle } from "styled-components";
import designTokens from "../../config/designTokens";

import QuicksandRegular from "../../static/fonts/Quicksand-Regular.ttf"
import QuicksandMedium from "../../static/fonts/Quicksand-Medium.ttf"
import QuicksandBold from "../../static/fonts/Quicksand-Bold.ttf"


const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Quicksand-Regular";
    src: url(${QuicksandRegular});
  }
  @font-face {
    font-family: "Quicksand-Medium";
    src: url(${QuicksandMedium});
  }
  @font-face {
    font-family: "Quicksand-Bold";
    src: url(${QuicksandBold});
  }
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
