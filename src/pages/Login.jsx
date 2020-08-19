import React from "react";
import PropType from "prop-types";
import designTokens from "../config/designTokens";
import LogoImage from "../static/images/logo-preto.svg";
import GlobalStyles from "../components/GlobalStyles/GlobalStyles";
import styled from "styled-components";
import Input from "../components/Input/Input";
import Title from "../components/Title/Title";

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
    grid-column: span ${(props) => props.tabletSize || props.size};
  }
  @media screen and (min-width: ${designTokens.breakpoints.desktop}px) {
    display: ${(props) => (!props.desktopSize ? "none" : "flex")};
    grid-column: span
      ${(props) => props.desktopSize || props.tabletSize || props.size};
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
      <GlobalStyles background={designTokens.colors.orange850} />
      <View>
        <Title
          color={designTokens.colors.black100}
          weight="regular"
          size="default"
        >
          Uniwire
        </Title>
        <img src={LogoImage} width={"100"} alt="logo uniwire" />
      </View>
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
