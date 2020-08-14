import React from "react";
import PropType from "prop-types";
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
  align-items: center;
`;

const StyledColumn = styled.div`
  display: grid;
  grid-row-gap: ${designTokens.grid.gutter}px;
  justify-content: center;
  grid-template-columns: repeat(${designTokens.grid.columns.mobile}, 1fr);
  @media screen and (min-width: ${designTokens.breakpoints.tablet}px) {
    grid-template-columns: repeat(${designTokens.grid.columns.tablet}, 1fr);
  }
  @media screen and (min-width: ${designTokens.breakpoints.desktop}px) {
    grid-template-columns: repeat(${designTokens.grid.columns.desktop}, 1fr);
  }
`;

const Column = styled.div`
  display: ${(props) => (!props.size ? "none" : "block")};
  grid-column: span ${(props) => props.size};
  @media screen and (min-width: ${designTokens.breakpoints.tablet}px) {
    display: ${(props) => (!props.tabletSize ? "none" : "block")};
    grid-column: span ${(props) => props.tabletSize};
  }
  @media screen and (min-width: ${designTokens.breakpoints.desktop}px) {
    display: ${(props) => (!props.desktopSize ? "none" : "block")};
    grid-column: span ${(props) => props.desktopSize};
  }
`;

Column.propTypes = {
  size: PropType.number,
  tabletSize: PropType.number,
  desktopSize: PropType.number,
};

function Login() {
  return (
    <>
      <GlobalStyles />
      <NavBar>
        <View>
          <Image src={LinkImage} width={"400px"} alt="logo uniwire" />
        </View>
      </NavBar>
      <StyledColumn>
        <Column desktopSize={6} tabletSize={6} size={6}>CAROUSEL</Column>
        <Column desktopSize={6} tabletSize={6} size={6}>LOGIN</Column>
      </StyledColumn>
    </>
  );
}

export default Login;
