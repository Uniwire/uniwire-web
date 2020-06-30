// import React from "react";
import styled from "styled-components";
import PropType from "prop-types";

const Text = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size}px;
  font-weigth: ${(props) => props.weight};
  font-family: ${(props) => props.family};
  text-decoration: ${(props) => props.decoration};
  line-height: ${(props) => props.height}px;
  text-align: ${(props) => props.align};
  @media screen and (min-width: 640px) {
    text-align: ${props => props.tabletAlign};
  }
  @media screen and (min-width: 960px) {
    text-align: ${props => props.desktopAlign};
  }
  ${(props) => {
    switch (props.type) {
      case "default":
        return "color: red; font-size: 20px; font-family: Futura";
      case "default2":
        return "color: green";
      default:
        return;
    }
  }}
`;

Text.propTypes = {
  as: PropType.string,
  type: PropType.string,
  color: PropType.string.isRequired,
  size: PropType.number.isRequired,
  weight: PropType.string,
  family: PropType.string.isRequired,
  decoration: PropType.string,
  height: PropType.number,
  align: PropType.string,
  alignTablet: PropType.string,
  alignDesktop: PropType.string
};


export default Text;
