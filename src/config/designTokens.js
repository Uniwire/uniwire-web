import PropType from "prop-types";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');

  html {
    font-family: sans-serif;
    background-color: "black";
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  body {
    background-color: "black";
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  * {
    min-height: 0;
  }
`;


const designTokens = {
  grid: {
    columns: {
      mobile: 4,
      tablet: 8,
      desktop: 12,
    },
  },
  breakpoints: {
    mobile: 0,
    tablet: 640,
    desktop: 960,
  },
  typography: {
    title: {
      family: {
        light: "Indie-Flower, sans-serif",
        regular: "Indie-Flower, sans-serif",
        bold: "Indie-Flower, sans-serif",
      },
      sizes: {
        big: {
          size: { desktop: 56, default: 32 },
          lineHeight: { desktop: 64, default: 40 },
        },
        default: {
          size: { desktop: 40, default: 24 },
          lineHeight: { desktop: 48, default: 32 },
        },
        small: {
          size: { desktop: 32, default: 20 },
          lineHeight: { desktop: 40, default: 28 },
        },
        xsmall: {
          size: { desktop: 24, default: 16 },
          lineHeight: { desktop: 32, default: 20 },
        },
      },
    },
    text: {
      family: {
        light: "Quicksand, sans-serif",
        regular: "Quicksand, sans-serif",
        bold: "Quicksand, sans-serif",
      },
      sizes: {
        big: {
          size: 20,
          lineHeight: 32,
        },
        default: {
          size: 16,
          lineHeight: 24,
        },
        small: {
          size: 14,
          lineHeight: 24,
        },
        xsmall: {
          size: 12,
          lineHeight: 20,
        },
      },
    },
  },
  colors: {
    orange050: "#fff7e1",
    orange100: "#fedd84",
    orange300: "#fed153",
    orange400: "#fdc630",
    orange500: "#fcbd1b",
    orange600: "#fcaf17",
    orange700: "#ff971b",
    orange800: "#fb8c15",
    orange900: "#f96d14",

    yellow300: "#feedc0",
    yellow400: "#fde197",
    yellow510: "#f5cb5c",
    yellow600: "#fcc944",
    yellow700: "#fcbd1b",
    yellow800: "#e6ac19",
    yellow900: "#b88a14",

    grey000: "#ffffff",
    grey025: "#fafafa",
    grey050: "#ebedee",
    grey065: "#e8eddf",
    grey080: "#cfdbd5",
    grey100: "#ced1d4",
    grey200: "#adb3b8",
    grey300: "#8c959b",
    grey400: "#747e85",
    grey500: "#5b6770",
    grey600: "#535f68",
    grey700: "#49545d",
    grey800: "#404a53",
    grey900: "#2f3941",
    grey910: "#333533",
    grey920: "#242423",
    grey930: "#1C1C1C",

    black100: "#000",
  },
  shadows: {
    default: {
      idle: "0 2px 16px 0 rgba(47, 57, 65, 0.16)",
      active: "0 2px 8px -2px rgba(47, 57, 65, 0.16)",
      hover:
        "0 2px 16px 0 rgba(47, 57, 65, 0.16), 0 2px 8px -2px rgba(47, 57, 65, 0.16)",
    },
    dark: {
      idle: "0 2px 16px 0 rgba(47, 57, 65, 0.16)",
      active: "0 2px 8px -2px rgba(47, 57, 65, 0.32)",
      hover:
        "0 2px 16px 0 rgba(47, 57, 65, 0.16), 0 2px 8px -2px rgba(47, 57, 65, 0.32), 0 2px 16px 0 rgba(47, 57, 65, 0.32)",
    },
  },
};

designTokens.propTypes = {
  grid: {
    columns: {
      mobile: PropType.number,
      tablet: PropType.number,
      desktop: PropType.number,
    },
  },
  breakpoints: {
    mobile: PropType.number,
    tablet: PropType.number,
    desktop: PropType.number,
  },
  typography: {
    title: {
      family: {
        light: PropType.string,
        regular: PropType.string,
        bold: PropType.string,
      },
      size: {
        big: {
          size: {
            desktop: PropType.number,
            default: PropType.number,
          },
        },
        default: {
          size: {
            desktop: PropType.number,
            default: PropType.number,
          },
        },
        small: {
          size: {
            desktop: PropType.number,
            default: PropType.number,
          },
        },
        xsmall: {
          size: {
            desktop: PropType.number,
            default: PropType.number,
          },
        },
      },
    },
    text: {
      family: {
        light: PropType.string,
        regular: PropType.string,
        bold: PropType.string,
      },
      size: {
        big: {
          size: {
            size: PropType.number,
            lineHeight: PropType.number,
          },
        },
        default: {
          size: {
            size: PropType.number,
            lineHeight: PropType.number,
          },
        },
        small: {
          size: {
            size: PropType.number,
            lineHeight: PropType.number,
          },
        },
        xsmall: {
          size: {
            size: PropType.number,
            lineHeight: PropType.number,
          },
        },
      },
    },
  },
  colors: PropType.string,
  shadows: {
    default: {
      idle: PropType.string,
      active: PropType.string,
      hover: PropType.string,
    },
    dark: {
      idle: PropType.string,
      active: PropType.string,
      hover: PropType.string,
    },
  },
};

export default designTokens;