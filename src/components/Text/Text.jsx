import styled from "styled-components";
import PropType from "prop-types";
import designTokens from "../../config/designTokens";

const Text = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => getFontSize(props.size)}px;
  font-weight: ${(props) => props.weight};
  font-family: ${(props) => getFontFamily(props.family)};
  text-decoration: ${(props) => props.decoration};
  line-height: ${(props) => getLineHeight(props.size)}px;
  text-align: ${(props) => props.align};
  @media screen and (min-width: ${designTokens.breakpoints.tablet}px) {
    text-align: ${(props) => props.tabletAlign};
  }
  @media screen and (min-width: ${designTokens.breakpoints.desktop}px) {
    text-align: ${(props) => props.desktopAlign};
  }
`;

Text.defaultProps = {
  family: "regular" | "medium" | "bold",
  size: "big" | "default" | "small" | "xsmall",
};

const getFontFamily = (family) => designTokens.typography.text.family[family];
const getFontSize = (size) => designTokens.typography.text.sizes[size].size;
const getLineHeight = (size) =>
  designTokens.typography.text.sizes[size].lineHeight;

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
          size: PropType.string.isRequired,
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
  align: PropType.number,
  alignTablet: PropType.string,
  alignDesktop: PropType.string,
};

export default Text;
