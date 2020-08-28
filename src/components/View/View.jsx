import styled from "styled-components";
import PropType from "prop-types";
import designTokens from "../../config/designTokens"

const View = styled.div`
  display: flex;
  justify-content: ${(props) => (props.justify ? props.justify : "center")};
  align-items: center;
  flex-direction: row;
  position: relative;
  left: ${(props) => (props.left ? props.left : "0")}px;

  @media screen and (min-width: ${designTokens.breakpoints.tablet}px) {
    left: ${(props) => (props.leftTablet ? props.leftTablet : "0")}px;
  }

  @media screen and (min-width: ${designTokens.breakpoints.desktop}px) {
    left: ${(props) => (props.leftDesktop ? props.leftDesktop : "0")}px;
  }
`;

View.propTypes = {
  justify: PropType.string,
  left: PropType.number,
};

export default View;
