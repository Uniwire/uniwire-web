import styled, { css } from "styled-components";
import PropType from "prop-types";
import designTokens from "../../config/designTokens";

const commonStyles = css`
  box-sizing: border-box;
  position: relative;
  display: inline-block;
  font-family: ${designTokens.typography.text.family.bold};
  font-weight: bold;
  font-size: ${designTokens.typography.text.sizes.xsmall.size}px;
  line-height: ${designTokens.typography.text.sizes.xsmall.lineHeight}px;
  letter-spacing: 1px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: background-color 0.15s ease-in-out;

  &:after {
    content: " ";
    display: block;
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    border-radius: 28px;
    border: 2px solid transparent;
    transition: border-color 0.15s ease-in-out;
  }

  &:hover,
  &:focus {
    transition: background-color 0s;
  }
  &:active {
    transition: background-color 0s;
  }
  &:focus {
    outline: none;
    overflow: visible;
  }
`;

export const ButtonPrimary = styled.button`
  ${commonStyles}
  width: ${(props) => (props.width ? props.width : "100")}%;
  height: ${(props) => (props.width ? props.width : "45")}px;
  line-height: 32px;
  background-color: ${designTokens.colors.yellow700};
  color: ${designTokens.colors.grey900};
  padding: 0;
  margin-top: ${(props) => (props.withoutMarginTop ? "2rem" : "0")};

  &:hover,
  &:focus {
    background-color: ${designTokens.colors.yellow300};
  }
  &:active {
    background-color: ${designTokens.colors.yellow300};
  }
  &:focus:after {
    border-color: ${designTokens.colors.orange500};
  }
  &[disabled] {
    pointer-events: none;
    background-color: ${designTokens.colors.grey100};
    color: ${designTokens.colors.grey400};
  }

  @media screen and (min-width: ${designTokens.breakpoints.tablet}px) {
    padding: 0;
  }
  @media screen and (min-width: ${designTokens.breakpoints.desktop}px) {
    padding: 0
  }
`;

ButtonPrimary.propTypes = {
  width: PropType.number,
  height: PropType.number,
  withoutMarginTop: PropType.boolean,
};
