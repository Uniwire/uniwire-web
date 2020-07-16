import React from "react";
import { render } from "react-dom";
import Text from "./components/text/Text";
import designTokens from "./config/designTokens";
import index from "./index.module.css"

function App() {
  return (
    <>
      <img src={"../static/images/logo-uniwire.svg"} alt="logo uniwire"/>
      <Text color={designTokens.colors.black100} size={50} family={"Quicksand, sans-serif"}>uniwire</Text>
    </>
  );
}

render(<App />, document.getElementById("root"));
