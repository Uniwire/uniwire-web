import styled from 'styled-components';
import designTokens from "../../config/designTokens";

const SelectField = styled.select`
  width: 100%;
  height: 3.2rem;
  margin-top: ${(props) => (props.withoutMarginTop ? "0" : "2rem")};
  border-radius: 10px;
  border: 1px solid ${designTokens.colors.yellow200};
  outline: 0;
  padding: 0 1.6rem;
  font: 1rem Poppins;
`;

export default SelectField;
