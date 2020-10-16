import React, { useState } from "react";
import designTokens from "../config/designTokens";
import LogoImage from "../static/images/logo-black.svg";
import WorldLogin from "../static/images/world-login.svg";
import Input from "../components/Input/Input";
import { ButtonPrimary, InvisibleButton } from "../components/Button/Button";
import Title from "../components/Title/Title";
import View from "../components/View/View";
import { Small } from "../components/Text/Text";
import { StyledColumn, ColumnContainer, Container } from "../components/Grid/Grid";
import { useForm } from "react-hook-form";
import Image from "../components/Image/Image";

function Login() {
  const { register, handleSubmit, errors } = useForm();
  const [session, setSession] = useState({ message: null });

  function onSubmit(data) {
    const url =
      data.password === "123123"
        ? "https://demo3107275.mockable.io/login"
        : " https://demo3107275.mockable.io/failed-login";

    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
    }).then((response) => {
      if (response.status === 401) {
        setSession({ message: "Login ou senha incorretos" });
      } else if (response.status === 200) {
        setSession({ message: "" });
      }
    });
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
        <ColumnContainer desktopSize={6} tabletSize={6} size={6}>
          <View>
            <Image
              src={WorldLogin}
              width={300}
              desktopWidth={500}
              alt="localização no globo terrestre"
            />
          </View>
        </ColumnContainer>
        <ColumnContainer desktopSize={6} tabletSize={12} size={12}>
          <View>
            <Container box>
              <form onSubmit={handleSubmit(onSubmit)}>
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
                    withoutMarginTop={true}
                    autocomplete="off"
                    widthDesktop={400}
                    type="email"
                    name="email"
                    id="inputEmail"
                    placeholder="Email"
                    ref={register({
                      required: "Preencha o campo email",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "Preencha com um email válido",
                      },
                    })}
                  />
                </View>
                <View justify="left" left={5} leftTablet={130} leftDesktop={25}>
                  {errors.email && (
                    <Small className="error">{errors.email.message}</Small>
                  )}
                </View>
                <View>
                  <Input
                    widthDesktop={400}
                    type="password"
                    name="password"
                    id="inputSenha"
                    placeholder="Senha"
                    ref={register({
                      required: "Preencha o campo senha",
                      // pattern: {
                      //   value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                      //   message: "Preencha com uma senha válida",
                      // },
                    })}
                  />
                </View>
                <View justify="left" left={5} leftTablet={130} leftDesktop={25}>
                  {errors.password && (
                    <Small className="error">{errors.password.message}</Small>
                  )}
                </View>
                <View justify="left" left={5}>
                  {session.message && (
                    <Small className="error">{session.message}</Small>
                  )}
                </View>
                <View>
                  <ButtonPrimary withoutMarginTop={true}>
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

export default Login;
