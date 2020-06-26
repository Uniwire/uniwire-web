// import React from "react";
import styled from "styled-components";
import PropType from "prop-types"

const Text = styled.p`
  color: ${(props) => {
    return props.color ? props.color : "pink"
  }};
  font-size: 20px;
  ${(props) => {
    switch (props.type) {
      case "default":
        return "color: red; font-size: 50px";
      case "default2":
        return "color: green";
      default:
        return;
    }
  }}
`;

Text.propType = {
  color: PropType.string.isRequired
}

export default Text;
