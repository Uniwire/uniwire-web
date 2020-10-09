import React, { useState } from "react";
import View from "../components/View/View";
import Container from "../components/Container/Container";
import Title from "../components/Title/Title";
import Input from "../components/Input/Input";
import { ButtonPrimary, InvisibleButton } from "../components/Button/Button";
import designTokens from "../config/designTokens";

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function SignUp() {
  return (
    <View
      justify="center"
      desktopJustify="center"
      desktopPaddingLeft={30}
      paddingTop={20}
      desktopPaddingTop={20}
      marginBottom={30}
    >
      <Container>
        <View>
          <Title size="small" color={designTokens.colors.grey900}>
            Cadastro
          </Title>
        </View>
        <View>
          <Input
            withoutMarginTop={true}
            autocomplete="off"
            widthDesktop={400}
            type="name"
            name="name"
            id="inputName"
            placeholder="Nome"
          />
        </View>
        <View>
          <Input
            autocomplete="off"
            widthDesktop={400}
            type="email"
            name="email"
            id="inputEmail"
            placeholder="Email"
          />
        </View>
        <View>
          <Input
            autocomplete="off"
            widthDesktop={400}
            type="password"
            name="password"
            id="inputPassword"
            placeholder="Senha"
          />
        </View>
        <View>
          <Input
            autocomplete="off"
            widthDesktop={400}
            type="phone"
            name="phone"
            id="inputPhone"
            placeholder="Telefone"
          />
        </View>
        <View>


        </View>
        <View>
          <ButtonPrimary withoutMarginTop={true} disable>
            Cadastrar-se
          </ButtonPrimary>
        </View>
      </Container>
    </View>
  )
}

export default SignUp;
