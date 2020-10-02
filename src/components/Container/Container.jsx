import styled from "styled-components";
import designTokens from "../../config/designTokens";

const Container = styled.div`
  background: ${designTokens.colors.grey000};
  width: 100%;
  height: auto;
  padding: 10px 40px 35px 40px;
  box-shadow: ${designTokens.shadows.dark.idle};

  @media screen and (min-width: ${designTokens.breakpoints.desktop}px) {
    width: 450px;
    border-radius: 8px;
  }
`;

export default Container;
