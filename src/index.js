import React from "react";
import { render } from "react-dom";
import Text from "./components/Text/Text";
import designTokens from "./config/designTokens";
import LinkImage from "./static/images/logo-uniwire.svg";
import GlobalStyles from "./components/GlobalStyles/GlobalStyles";
import styled from "styled-components";

function App() {
  const Image = styled.img`
    width: 400px;
    margin-top: 70px;
  `;

  const View = styled.div`
    text-align: center;
    line-height: 30px;
  `;

  const Container = styled.div`
    position: absolute;
    right: 450px;
    width: 500px;
    height: 150px;
    padding: 20px;
    margin-top: 50px;
    background-color: ${designTokens.colors.yellow400};
    border-radius: 20px;
  `

  return (
    <>
      <GlobalStyles />
      <View>
        <Image src={LinkImage} width={"400px"} alt="logo uniwire" />
      </View>
      <Container>
        <Text
          color={designTokens.colors.grey920}
          size={20}
          family={"Quicksand-Regular, sans-serif"}
        >
          A Uniwire é uma empresa responsável pela conexão
          clara e eficiente entre quem busca e oferece<br/>
          vagas. Nosso maior objetivo é ampar universitários da UFBC que estão em busca
          de uma residência, garantindo melhores preços e serviços.
        </Text>
      </Container>
    </>
  );
}

render(<App />, document.getElementById("root"));
