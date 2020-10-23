import React from "react";
import { render } from "react-dom";
import { Routes } from "./routes";
import GlobalStyles from "./components/GlobalStyles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes />
    </>
  );
}

render(<App />, document.getElementById("root"));
