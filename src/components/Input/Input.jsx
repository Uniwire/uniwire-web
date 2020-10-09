import styled from "styled-components";
import designTokens from "../../config/designTokens";
import PropType from "prop-types";

const Input = styled.input`
  width: 100%;
  height: 3.2rem;
  margin-top: ${(props) => (props.withoutMarginTop ? "0" : "2rem")};
  border-radius: 10px;
  border: 1px solid ${designTokens.colors.yellow200};
  outline: 0;
  padding: 0 1.6rem;
  font: 1rem Poppins;
`;

Input.propTypes = {
  withoutMarginTop: PropType.bool,
};

export default Input;
