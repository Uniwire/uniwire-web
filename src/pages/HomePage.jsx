import React from "react";
import Title from "../components/Title/Title";
import designTokens from "../config/designTokens";
import View from "../components/View/View";
import { ButtonPrimary } from "../components/Button/Button";
import { Container, ColumnContainer, StyledColumn } from "../components/Grid/Grid"
import Image from "../components/Image/Image";
import ExploreUniversity from "../static/images/explore-university.svg";

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

      <StyledColumn>
        <ColumnContainer desktopSize={6} tabletSize={12} size={12}>
            <View>
            <Container box={0} background={designTokens.colors.grey050} width={50}>
              <View>
              <Image src={ExploreUniversity} width={150} desktopWidth={250} alt="explorar universidade"/>
              </View>
              <ButtonPrimary >Anunciar Vaga</ButtonPrimary>

            </Container>
            </View>
        </ColumnContainer>
      <ColumnContainer desktopSize={6} tabletSize={12} size={12}>
        <View>
          <Container background={designTokens.colors.grey080} width={50}>
            <ButtonPrimary >Anunciar Vaga</ButtonPrimary>
          </Container>
        </View>
      </ColumnContainer>
      </StyledColumn>
    </>
  );
}

export default HomePage;
