import React from "react";
import PropType from "prop-types";
import styled from 'styled-components'

// componentes do texto:
// tipo = <span></span>
// color
// font-size
// font-weight
// text-decoration
// alinhamento
// alinhamento tablet
// alinhamento desktop
const type = {
  as:
    "p" |
    "label" |
    "div" |
    "span" |
    "sup" |
    "sub" |
    "h1" |
    "h2" |
    "h3" |
    "h4" |
    "h5" |
    "h6",
};

function Text({
  type,
  name,
  color,
  height,
  size,
  line,
  font,
  weight,
  align,
  alignDesktop,
  alignTablet,
}) {
  const styles = {
    color: color,
    height: height,
    fontSize: size,
    lineHeight: line,
    fontFamily: font,
    textAlign: align,
  };

  return (
    <>
      <p style={styles}>Texto</p>
    </>
  );
}

Text.propTypes = {
  name: PropType.string.isRequired,
  type: PropType.string.isRequired,
  color: PropType.string.isRequired,
  size: PropType.number.isRequired,
  line: PropType.number,
  font: PropType.string.isRequired,
  weight: PropType.string.isRequired,
  align: PropType.string,
  alignTablet: PropType.string,
  alignDesktop: PropType.string,
};

export default Text;
