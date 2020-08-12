import React from "react";
import Text from "../components/Text/Text";
import designTokens from "../config/designTokens";
import LinkImage from "../static/images/logo-uniwire-cinza.svg";
import GlobalStyles from "../components/GlobalStyles/GlobalStyles";
import styled from "styled-components";

const NavBar = styled.header`
  width: 100%;
  height: 60px;
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: ${designTokens.colors.yellow700};
  border-radius: 0 0 30px 30px;
  box-shadow: ${designTokens.shadows.default.idle};
`;

const Image = styled.img`
  width: 140px;
`;

const View = styled.div`
  display: flex;
  justify-content: center;
  align-items: center
`;

const Container = styled.div`
  position: absolute;
  height: auto;
  padding: 20px;
  margin-top: 50px;
  background-color: ${designTokens.colors.yellow400};
  border-radius: 20px;
  @media (min-width: ${designTokens.breakpoints.tablet}px) {
    width: 500px;
  }
  @media (min-width: ${designTokens.breakpoints.desktop}px) {
    width: 500px;
  }
`;

function Login() {
  return (
    <>
      <GlobalStyles />
      <NavBar>
        <View>
          <Image src={LinkImage} width={"400px"} alt="logo uniwire" />
        </View>
      </NavBar>
    </>
  );
}

export default Login;
