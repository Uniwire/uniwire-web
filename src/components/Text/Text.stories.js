import React from "react";
import { storiesOf } from "@storybook/react";
import Text from "./Text";
import GlobalStyles from "../GlobalStyles/GlobalStyles";

const fontFamily = ["bold","medium", "regular"]
const fontSizes = ["big", "default", "small", "xsmall"]

storiesOf("Components/Text", module).add("default", () => (
  <>
    <GlobalStyles />
    {fontSizes.map((size, i) => (
      <div style={{ padding: 20 }} key={i}>
        {fontFamily.map((family, j) => (
          <Text
            key={j}
            size={size}
            family={family}
            color={j ? "grey" : "black"}
          >
            The quick brown fox jumps over the lazy dog
          </Text>
        ))}
      </div>
    ))}
  </>
))
