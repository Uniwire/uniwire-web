import PropType from "prop-types";
import designTokens from "../../config/designTokens";
import styled from "styled-components";

export const StyledColumn = styled.div`
  display: grid;
  grid-row-gap: ${designTokens.grid.gutter}px;
  justify-content: center;

  grid-template-columns: repeat(${designTokens.grid.columns.mobile}, 1fr);
  @media screen and (min-width: ${designTokens.breakpoints.tablet}px) {
    grid-template-columns: repeat(${designTokens.grid.columns.tablet}, 1fr);
  }
  @media screen and (min-width: ${designTokens.breakpoints.desktop}px) {
    grid-template-columns: repeat(${designTokens.grid.columns.desktop}, 1fr);
  }
`;

export const Column = styled.div`
  display: ${(props) => (!props.size ? "none" : "flex")};
  grid-column: span ${(props) => props.size};
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${designTokens.breakpoints.tablet}px) {
    display: ${(props) => (!props.tabletSize ? "none" : "flex")};
    grid-column: span ${(props) => props.tabletSize || props.size};
  }
  @media screen and (min-width: ${designTokens.breakpoints.desktop}px) {
    display: ${(props) => (!props.desktopSize ? "none" : "flex")};
    grid-column: span
      ${(props) => props.desktopSize || props.tabletSize || props.size};
  }
`;

Column.propTypes = {
  size: PropType.number,
  tabletSize: PropType.number,
  desktopSize: PropType.number,
};
