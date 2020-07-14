import PropType from "prop-types";
import { createGlobalStyle } from "styled-components";

export const FontFamily = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');

  @font-face {
    font-display: block;
    font-family: 'Quicksand-Bold';
    src:  url('/fonts/Quicksand-Bold.ttf') format('truetype');
  }

  @font-face {
    font-display: block;
    font-family: 'Quicksand-SemiBold';
    src:  url('/fonts/Quicksand-SemiBold.ttf') format('truetype');
  }

  @font-face {
    font-display: block;
    font-family: 'Quicksand-Regular';
    src:  url('/fonts/Quicksand-Regular.ttf') format('truetype');
  }

  @font-face {
    font-display: block;
    font-family: 'Quicksand-Medium';
    src:  url('/fonts/Quicksand-Medium.ttf') format('truetype');
  }

  @font-face {
    font-display: block;
    font-family: 'Quicksand-Light';
    src:  url('/fonts/Quicksand-Light.ttf') format('truetype');
  }

  html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  body {
    background-color: ${designTokens.colors.grey065};
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
        light: ", sans-serif",
        regular: ",sans-serif",
        bold: ",sans-serif",
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
        light: ", sans-serif",
        regular: ", sans-serif",
        bold: ", sans-serif",
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

export const BreakPoint = "mobile" | "tablet" | "desktop";
export const TypographyWeight = "light" | "regular" | "bold";
export const TypographySize = "big" | "default" | "small" | "xsmall";

ShadowsType.propTypes = {
  idle: PropType.string,
  active: PropType.string,
  hover: PropType.string,
};

TypographySizeSettings.propTypes = {
  size: PropType.number,
  lineHeight: PropType.number,
};

TypographyResponsiveSizeSettings.propTypes = {
  size: { desktop: PropType.number, default: PropType.number },
  lineHeight: { desktop: PropType.number, default: PropType.number },
};

TypographyResponsiveCollection.propTypes = {
  family: PropType.string,
  sizes: PropType.TypographyResponsiveSizeSettings,
};

TypographyCollection.propTypes = {
  family: PropType.string,
  sizes: PropType.TypographySize,
};

designTokens.propTypes = {
  grid: {
    columns: PropType.number,
  },
  breakpoints: PropType.number,
  typography: {
    title: PropType.TypographyResponsiveCollection,
    text: PropType.TypographyCollection,
  },
  colors: PropType.string,
  shadows: {
    default: PropType.ShadowsType,
    dark: PropType.ShadowsType,
  },
};

export default designTokens;
