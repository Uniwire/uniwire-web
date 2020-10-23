import React from "react";
import Title from "../components/Title/Title";
import Text from "../components/Text/Text";
import designTokens from "../config/designTokens";
import View from "../components/View/View";
import { ButtonPrimary } from "../components/Button/Button";
import {
  Container,
  ColumnContainer,
  StyledColumn,
} from "../components/Grid/Grid";
import Image from "../components/Image/Image";
import ExploreUniversity from "../static/images/explore-university.svg";
import AdvertiseVacancy from "../static/images/advertise-vacancy.svg";
import { Link } from "react-router-dom";
import LogoImage from "../static/images/logo-black.svg";

function HomePage() {
  return (
    <>
      <View>
        <Title
          size="default"
          weight="medium"
          color={designTokens.colors.orange300}
        >
          Bem vindo à Uniwire
        </Title>
        <Image
          src={LogoImage}
          width={40}
          desktopWidth={70}
          alt="logo uniwire"
        />
      </View>
      <View bottom={40}>
        <Title size="xsmall" align="center" color={designTokens.colors.grey900}>
          Uma plataforma para universidades mais conectadas
        </Title>
      </View>

      <StyledColumn>
        <ColumnContainer desktopSize={6} tabletSize={12} size={12}>
          <View>
            <Container
              box={0}
              background={designTokens.colors.grey050}
              width={50}
            >
              <View>
                <Image
                  src={ExploreUniversity}
                  width={150}
                  desktopWidth={250}
                  alt="explorar universidade"
                />
              </View>
              <Text
                color={designTokens.colors.grey900}
                weigth="regular"
                size="big"
                align="center"
              >
                Encontre residências estudantis, eventos e muito mais!
              </Text>
              <Link to="/map">
                <ButtonPrimary>Explorar universidades</ButtonPrimary>
              </Link>
            </Container>
          </View>
        </ColumnContainer>
        <ColumnContainer desktopSize={6} tabletSize={12} size={12}>
          <View>
            <Container background={designTokens.colors.grey050} width={50}>
              <View>
                <Image
                  src={AdvertiseVacancy}
                  width={150}
                  desktopWidth={250}
                  alt="anunciar vaga"
                />
              </View>
              <Text
                color={designTokens.colors.grey900}
                weigth="regular"
                size="big"
                align="center"
              >
                Ajude a criar uma universidade mais conectada!
              </Text>
              <Link to="/login">
                <ButtonPrimary>Anunciar Vaga</ButtonPrimary>
              </Link>
            </Container>
          </View>
        </ColumnContainer>
      </StyledColumn>
    </>
  );
}

export default HomePage;
