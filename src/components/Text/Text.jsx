import styled from "styled-components";
import PropType from "prop-types";

const Text = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size}px;
  font-weight: ${(props) => props.weight};
  font-family: ${(props) => props.family};
  text-decoration: ${(props) => props.decoration};
  line-height: ${(props) => props.height}px;
  text-align: ${(props) => props.align};
  @media screen and (min-width: 640px) {
    text-align: ${(props) => props.tabletAlign};
  }
  @media screen and (min-width: 960px) {
    text-align: ${(props) => props.desktopAlign};
  }

  // This props standardizes text types if you don't want to customize
  // and choose one already assembled. It is not yet configured with the
  // right styles, other components need to be implemented first.
  ${(props) => {
    switch (props.type) {
      case "default":
        return "color: red; font-size: 50px; font-family: Quicksand, sans-serif; font-weight: 100";
      case "default2":
        return "color: green";
      default:
        return;
    }
  }}
`;

Text.propTypes = {
  type: (props) => {
    if (props.type) {
      PropType.checkPropTypes(
        {
          type: PropType.string.isRequired,
        },
        { type: props.type },
        "prop",
        "Componente Text"
      );
    } else {
      PropType.checkPropTypes(
        {
          color: PropType.string.isRequired,
          size: PropType.number.isRequired,
          family: PropType.string.isRequired,
        },
        { color: props.color, size: props.size, family: props.family },
        "prop",
        "Componente Text"
      );
    }
    return null;
  },
  as: PropType.string,
  weight: PropType.string,
  decoration: PropType.string,
  height: PropType.number,
  align: PropType.string,
  alignTablet: PropType.string,
  alignDesktop: PropType.string,
};

export default Text;