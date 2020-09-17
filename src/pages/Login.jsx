import React, { useState } from "react";
import designTokens from "../config/designTokens";
import LogoImage from "../static/images/logo-preto.svg";
import styled from "styled-components";
import Input from "../components/Input/Input";
import { ButtonPrimary } from "../components/Button/Button";
import Title from "../components/Title/Title";
import View from "../components/View/View";
import { Small } from "../components/Text/Text";
import { useForm } from "react-hook-form";

const Container = styled.div`
  background-color: ${designTokens.colors.grey000};
  width: 100%;
  height: auto;
  padding: 15px 15px 30px 15px;

  @media screen and (min-width: ${designTokens.breakpoints.desktop}px) {
    width: 500px;
    border-radius: 8px;
  }
`;

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
      <View column>
        <Container>
          <form onSubmit={handleSubmit(onSubmit)}>
            <View>
              <Title size="small" color={designTokens.colors.grey900}>
                Já é cadastrado?
              </Title>
            </View>
            <View>
              <Input
                withoutMarginTop
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
              <ButtonPrimary withoutMarginTop>Entrar</ButtonPrimary>
            </View>
          </form>
        </Container>
      </View>
    </>
  );
}

export default Login;
