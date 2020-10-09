import styled from "styled-components";
import PropType from "prop-types";
import designTokens from "../../config/designTokens";

const View = styled.div`
  display: flex;
  justify-content: ${(props) => (props.justify ? props.justify : "center")};
  align-items: center;
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
  position: relative;
  left: ${(props) => (props.left ? props.left : "0")}px;
  margin-bottom: ${(props) =>
    props.marginBottom ? props.marginBottom : "0"}px;
  padding-top: ${(props) => (props.paddingTop ? props.paddingTop : "0")}px;
  margin-right: ${(props) => (props.marginRight ? props.marginRight : "0")}px;
  margin-left: ${(props) => (props.marginLeft ? props.marginleft : "0")}px;

  @media screen and (min-width: ${designTokens.breakpoints.tablet}px) {
    left: ${(props) => (props.tabletLeft ? props.tabletLeft : "0")}px;
    justify-content: ${(props) => (props.tabletJustify ? props.tabletJustify : "center")};
  }

  @media screen and (min-width: ${designTokens.breakpoints.desktop}px) {
    justify-content: ${(props) => (props.desktopJustify ? props.desktopJustify : "center")};
    left: ${(props) => (props.desktopLeft ? props.desktopLeft : "0")}px;
    padding-left: ${(props) =>
      props.desktopPaddingLeft ? props.desktopPaddingLeft : "0"}px;
    padding-top: ${(props) =>
      props.desktopPaddingTop ? props.desktopPaddingTop : "0"}px;
  }
`;

View.defaultProps = {
  direction: "row" | "column" | "column-reverse" | "row-reverse",
};

View.propTypes = {
  justify: PropType.string,
  desktopJustify: PropType.string,
  tabletJustify: PropType.string,
  direction: PropType.string,
  left: PropType.number,
  marginRight: PropType.number,
  marginLeft: PropType.number,
  marginBottom: PropType.number,
  tabletLeft: PropType.number,
  desktopLeft: PropType.number,
  desktopPaddingLeft: PropType.number,
  desktopPaddingTop: PropType.number,
  paddingTop: PropType.number,
};

export default View;
