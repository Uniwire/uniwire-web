import React from "react";
import { render } from "react-dom";
import Routes from "./Routes";
import GlobalStyles from "./components/GlobalStyles/GlobalStyles";
import 'fontsource-roboto';

function App() {
  return (
    <>
      <Routes />
      <GlobalStyles />
    </>
  );
}

render(<App />, document.getElementById("root"));
