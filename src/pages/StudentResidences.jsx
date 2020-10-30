import React, { useState } from "react";
import designTokens from "../config/designTokens";
import LogoImage from "../static/images/logo-black.svg";
import styled from "styled-components";
import Input from "../components/Input/Input";
import { ButtonPrimary, InvisibleButton } from "../components/Button/Button";
import Title from "../components/Title/Title";
import View from "../components/View/View";
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
  const { handleSubmit } = useForm();
  const [residences, setResidences] = useState([{}]);

  function onSubmit(data) {
    const url = 'http://localhost:4000/v1/student_residences/find'

    console.log(data)

    fetch(url, {
      method: "POST",
      body: JSON.stringify({ search_term: "rep" }),
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
    }).then(response => response.json()).then(result => {
      setResidences(result);
      console.log(result);
    }, [residences])
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input width={10}
              widthDesktop={400}
              type="text"
              name="text"
              id="inputSearch"
              placeholder="O que você procura?"
          />
          <ButtonPrimary withoutMarginTop={true} disable>
            buscar
          </ButtonPrimary>
        </form>
      </View>
      <View>
        <View>
          {residences[0].name}
        </View>
      </View>
    </>
  );
}

export default StudentResidences;
