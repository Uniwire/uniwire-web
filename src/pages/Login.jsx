import React from "react";
import designTokens from "../config/designTokens";
import LogoImage from "../static/images/logo-preto.svg";
import GlobalStyles from "../components/GlobalStyles/GlobalStyles";
import styled, { css } from "styled-components";
import Input from "../components/Input/Input";
import Title from "../components/Title/Title";
import { StyledColumn, Column } from "../components/Grid/Grid";

const View = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const Container = styled.div`
  background: ${designTokens.colors.grey000};
  width: 100%;
  height: 300px;
  padding: 15px;

  @media screen and (min-width: ${designTokens.breakpoints.desktop}px) {
    width: 500px;
    border-radius: 8px;
  }
`;

const commonStyles = css`
  box-sizing: border-box;
  position: relative;
  display: inline-block;
  font-family: ${designTokens.typography.text.family.bold};
  font-weight: bold;
  font-size: ${designTokens.typography.text.sizes.xsmall.size}px;
  line-height: ${designTokens.typography.text.sizes.xsmall.lineHeight}px;
  letter-spacing: 1px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 24px;
  border: none;
  cursor: pointer;
  transition: background-color 0.15s ease-in-out;

  &:after {
    content: " ";
    display: block;
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    border-radius: 28px;
    border: 2px solid transparent;
    transition: border-color 0.15s ease-in-out;
  }

  &:hover,
  &:focus {
    transition: background-color 0s;
  }
  &:active {
    transition: background-color 0s;
  }
  &:focus {
    outline: none;
    overflow: visible;
  }
`;

const Button = styled.button`
  ${commonStyles}
  width: 100px;
  line-height: ${(props) => (props.small ? 32 : 48)}px;
  background-color: ${designTokens.colors.orange600};
  color: ${designTokens.colors.grey900};
  padding: 0

  &:hover,
  &:focus {
    background-color: ${designTokens.colors.orange400};
  }
  &:active {
    background-color: ${designTokens.colors.orange600};
  }
  &:focus:after {
    border-color: ${designTokens.colors.purple800};
  }
  &[disabled] {
    pointer-events: none;
    background-color: ${designTokens.colors.grey100};
    color: ${designTokens.colors.grey400};
  }

  @media screen and (min-width: ${designTokens.breakpoints.tablet}px) {
    padding: 0;
  }
  @media screen and (min-width: ${designTokens.breakpoints.desktop}px) {
    padding: 0
  }
`;

function Login() {
  return (
    <>
      <GlobalStyles background={designTokens.colors.orange850} />
      <View>
        <Title
          color={designTokens.colors.black100}
          weight="medium"
          size="default"
        >
          uniwire
        </Title>
        <img src={LogoImage} width={"100"} alt="logo uniwire" />
      </View>
      <StyledColumn>
        <Column desktopSize={6} tabletSize={6} size={6}>
          CAROUSEL
        </Column>
        <Column desktopSize={6} tabletSize={12} size={12}>
          <Container>
            <View>
              <Input widthDesktop={400} type="text" placeholder="Email" />
            </View>
            <View>
              <Input widthDesktop={400} type="text" placeholder="Senha" />
            </View>
            <Button>Entrar</Button>
          </Container>
        </Column>
      </StyledColumn>
    </>
  );
}

export default Login;
