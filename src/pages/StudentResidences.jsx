import React, { useState } from "react";
import designTokens from "../config/designTokens";
import LogoImage from "../static/images/logo-black.svg";
import WorldLogin from "../static/images/world-login.svg";
import styled from "styled-components";
import Input from "../components/Input/Input";
import { ButtonPrimary, InvisibleButton } from "../components/Button/Button";
import Title from "../components/Title/Title";
import View from "../components/View/View";
import { Small } from "../components/Text/Text";
import { StyledColumn, ColumnContainer } from "../components/Grid/Grid";
import { useForm } from "react-hook-form";
import Image from "../components/Image/Image";

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

function StudentResidences() {
  const { register, handleSubmit, errors } = useForm();
  const [residences, setResidences] = useState([{}]);

  function onSubmit() {
    const url = 'http://localhost:4000/v1/student_residences'

    fetch(url, {
      method: "GET",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
    }).then(response => response.json()).then(result => {
      console.log(result);
      setResidences(result);
    })
  }

  return (
    <>
      <View
        justify="center"
        desktopJustify="left"
        desktopPaddingLeft={30}
        paddingTop={20}
        desktopPaddingTop={20}
        marginBottom={30}
      >
        <Title size="small" color={designTokens.colors.grey900}>
          Uniwire
        </Title>
        <Image
          src={LogoImage}
          width={40}
          desktopWidth={70}
          alt="logo uniwire"
        />
      </View>
      <StyledColumn>
        <ColumnContainer desktopSize={6} tabletSize={12} size={12}>
          <View>
            <Container>
              <form onSubmit={handleSubmit(onSubmit)}>
                <View>
                  {
                    residences[0]
                  }
                </View>
                <View>
                  <Title
                    size="small"
                    align="center"
                    color={designTokens.colors.grey900}
                  >
                    Comece a conectar sua universidade!
                  </Title>
                </View>
                <View>
                  <Input
                    widthDesktop={400}
                    type="text"
                    name="text"
                    id="inputSearch"
                    placeholder="O que você procura?"
                  />
                </View>
                <View justify="left" left={5} leftTablet={130} leftDesktop={25}>

                </View>
                <View justify="left" left={5}>

                </View>
                <View>
                  <ButtonPrimary withoutMarginTop={true} disable>
                    Entrar
                  </ButtonPrimary>
                </View>
              </form>
              <View paddingTop={20} desktopPaddingTop={20}>
                <InvisibleButton color={"light"}>Cadastre-se</InvisibleButton>
              </View>
            </Container>
          </View>
        </ColumnContainer>
      </StyledColumn>
    </>
  );
}

export default StudentResidences;
