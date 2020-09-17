import styled from "styled-components";
import PropType from "prop-types";
import designTokens from "../../config/designTokens";

const View = styled.div`
  display: flex;
  justify-content: ${(props) => (props.justify ? props.justify : "center")};
  align-items: center;
  flex-direction: ${(props) =>
    props.row || props.column ? "row" || "column" : "row"};
  position: relative;
  left: ${(props) => (props.left ? props.left : "0")}px;
  margin-bottom: ${(props) =>
    props.marginBottom ? props.marginBottom : "0"}px;

  @media screen and (min-width: ${designTokens.breakpoints.tablet}px) {
    left: ${(props) => (props.tabletLeft ? props.tabletLeft : "0")}px;
  }

  @media screen and (min-width: ${designTokens.breakpoints.desktop}px) {
    left: ${(props) => (props.desktopLeft ? props.desktopLeft : "0")}px;
  }
`;

View.propTypes = {
  justify: PropType.string,
  left: PropType.number,
  row: PropType.boolean,
  column: PropType.boolean,
  marginBottom: PropType.number,
  tabletLeft: PropType.number,
  desktopLeft: PropType.number,
};

export default View;
