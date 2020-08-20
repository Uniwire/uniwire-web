import React from "react";
import designTokens from "../config/designTokens";
import LogoImage from "../static/images/logo-preto.svg";
import GlobalStyles from "../components/GlobalStyles/GlobalStyles";
import styled from "styled-components";
import Input from "../components/Input/Input";
import { ButtonPrimary } from "../components/Button/Button"
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
              <Title size="small" color={designTokens.colors.grey900}>
                Já é cadastrado?
              </Title>
            </View>
            <View>
              <Input widthDesktop={400} type="text" placeholder="Email" />
            </View>
            <View>
              <Input widthDesktop={400} type="text" placeholder="Senha" />
            </View>
            <View>
              <ButtonPrimary disabled >Entrar</ButtonPrimary>
            </View>
          </Container>
        </Column>
      </StyledColumn>
    </>
  );
}

export default Login;
