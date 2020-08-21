import styled from "styled-components";
import designTokens from "../../config/designTokens";

const Input = styled.input`
  width: 230px;
  height: 3.2rem;
  margin-bottom: 2rem;
  border-radius: 0.8rem;
  background-color: ${designTokens.colors.orange050};
  border: 1px solid ${designTokens.colors.yellow200};
  outline: 0;
  padding: 0 1.6rem;
  font: 1rem Poppins;

  @media screen and (min-width: ${designTokens.breakpoints.tablet}px) {
    width: 424px;
  }
  @media screen and (min-width: ${designTokens.breakpoints.desktop}px) {
    width: 400px;
  }
`;

export default Input;
