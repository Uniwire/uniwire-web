import React from "react";
import Title from "../components/Title/Title";
import designTokens from "../config/designTokens";
import View from "../components/View/View";
import { ButtonPrimary } from "../components/Button/Button";
import history from '../../history';

function HomePage() {
  return (
    <>
      <View>
        <Title size="default" color={designTokens.colors.orange300}>
          Bem vindo à Uniwire
        </Title>
      </View>
      <View>
        <Title size="xsmall" color={designTokens.colors.grey900}>
          Uma plataforma para universidades mais conectadas
        </Title>
      </View>
      <View>
        <ButtonPrimary onClick={()=> history.push("/login")}>Anunciar Vaga</ButtonPrimary>
      </View>
    </>
  );
}

export default HomePage;
