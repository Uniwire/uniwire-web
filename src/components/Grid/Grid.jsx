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

export const ColumnContainer = styled.div`
  display: ${(props) => (!props.size ? "none" : "block")};
  grid-column: span ${(props) => props.size};

  @media screen and (min-width: ${designTokens.breakpoints.tablet}px) {
    display: ${(props) => (!props.tabletSize ? "none" : "block")};
    grid-column: span ${(props) => props.tabletSize || props.size};
  }
  @media screen and (min-width: ${designTokens.breakpoints.desktop}px) {
    display: ${(props) => (!props.desktopSize ? "none" : "block")};
    grid-column: span
      ${(props) => props.desktopSize || props.tabletSize || props.size};
  }
`;

export const Container = styled.div`
  background: ${(props) => props.background ? props.background : designTokens.colors.grey000};
  width: ${(props) => props.width ? props.width : "100"}%;
  height: auto;
  padding: 10px 40px 35px 40px;
  box-shadow: ${(props) => props.box ? designTokens.shadows.dark.idle : "none"};

  @media screen and (min-width: ${designTokens.breakpoints.desktop}px) {
    width: ${(props) => props.width ? props.desktopWidth : "50"}%;
    border-radius: 8px;
  }
`;

ColumnContainer.propTypes = {
  size: PropType.number,
  tabletSize: PropType.number,
  desktopSize: PropType.number,
  background: PropType.string,
  desktopWidth: PropType.number,
  box: PropType.bool,
};
