import React from "react";
import PropType from "prop-types";
import designTokens from "../config/designTokens";
import LinkImage from "../static/images/logo-uniwire-cinza.svg";
import GlobalStyles from "../components/GlobalStyles/GlobalStyles";
import styled from "styled-components";
import Input from "../components/Input/Input";

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

const Container = styled.div`
  margin: 0 10px;
`;

const Column = styled.div`
  display: ${(props) => (!props.size ? "none" : "flex")};
  grid-column: span ${(props) => props.size};
  justify-content: center;
  align-items: center;
  @media screen and (min-width: ${designTokens.breakpoints.tablet}px) {
    display: ${(props) => (!props.tabletSize ? "none" : "flex")};
    grid-column: span ${(props) => props.tabletSize};
  }
  @media screen and (min-width: ${designTokens.breakpoints.desktop}px) {
    display: ${(props) => (!props.desktopSize ? "none" : "flex")};
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
      <Container>
        <StyledColumn>
          <Column desktopSize={6} tabletSize={6} size={6}>
            CAROUSEL
          </Column>
          <Column desktopSize={6} tabletSize={12} size={12}>
            <Input widthDesktop={400} type="text" placeholder="Email" />
          </Column>
        </StyledColumn>
      </Container>
    </>
  );
}

export default Login;
