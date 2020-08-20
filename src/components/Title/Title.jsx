import styled from "styled-components";
import PropType from "prop-types";
import designTokens from "../../config/designTokens";

const Title = styled.p`
  color: ${(props) =>
    props.color ? props.color : designTokens.colors.black100};
  font-size: ${(props) => getFontSize(props.size)}px;
  font-weight: ${(props) =>
    getFontWeight(props.weight ? props.weight : "regular")};
  font-family: ${(props) => getFontFamily(props.weight)};
  text-decoration: ${(props) => props.decoration};
  line-height: ${(props) => getLineHeight(props.size)}px;
  text-align: ${(props) => props.align};

  @media screen and (min-width: ${designTokens.breakpoints.tablet}px) {
    text-align: ${(props) => props.tabletAlign || props.align};
  }
  @media screen and (min-width: ${designTokens.breakpoints.desktop}px) {
    text-align: ${(props) =>
      props.desktopAlign || props.tabletAlign || props.align};
    font-size: ${(props) => getFontSize(props.size, "desktop")}px;
    line-height: ${(props) => getLineHeight(props.size, "desktop")}px;
  }
`;

Text.defaultProps = {
  family: "regular" | "medium" | "bold",
  size: "big" | "default" | "small" | "xsmall",
  screenSize: "desktop" | "default",
  weight: "regular" | "medium" | "bold",
};

const getFontWeight = (weight) => {
  switch (weight) {
    case "bold":
      return 700;
    case "medium":
      return 400;
    case "regular":
      return 300;
    default:
      return null;
  }
};

const getFontFamily = (weight) => designTokens.typography.title.family[weight];
const getFontSize = (size, screenSize = "default") =>
  designTokens.typography.title.sizes[size].size[screenSize];
const getLineHeight = (size, screenSize = "default") =>
  designTokens.typography.title.sizes[size].lineHeight[screenSize];

Text.propTypes = {
  color: PropType.string.isRequired,
  size: PropType.string.isRequired,
  as: PropType.string,
  weight: PropType.string,
  decoration: PropType.string,
  align: PropType.number,
  alignTablet: PropType.string,
  alignDesktop: PropType.string,
};

export default Title;
