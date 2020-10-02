import styled from "styled-components";
import PropType from "prop-types";
import designTokens from "../../config/designTokens";

const Image = styled.img`
  width: ${(props) => props.width}px;

  @media screen and (min-width: ${designTokens.breakpoints.desktop}px) {
    width: ${(props) => props.desktopWidth}px;
  }
`;

Image.propTypes = {
  width: PropType.number,
  desktopWidth: PropType.number.isRequired,
};

export default Image;
