import PropType from "prop-types";
import styled from "styled-components";
import designTokens from "../../config/designTokens";

const Input = styled.input`
  width: 245px;
  height: 3.2rem;
  margin-top: 0.8rem;
  border-radius: 0.8rem;
  background-color: ${designTokens.colors.orange050};
  border: 1px solid ${designTokens.colors.yellow300};
  outline: 0;
  padding: 0 1.6rem;
  font: 1.2rem Poppins;

  @media screen and (min-width: ${designTokens.breakpoints.tablet}px) {
    width: 424px;
  }
  @media screen and (min-width: ${designTokens.breakpoints.desktop}px) {
    width: 400px;
  }

  &:focus-within::after {
    width: calc(100% - 3.2rem);
    height: 2px;
    content: "";
    background-color: ${designTokens.colors.yellow300};
    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    bottom: 0;
  }
`;

Input.propTypes = {
  width: PropType.number.isRequired,
  widthDesktop: PropType.number.isRequired,
};

export default Input