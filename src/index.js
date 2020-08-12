import React from "react";
import { render } from "react-dom";
import Routes from "./Routes";

function App() {
  return <Routes />;
}

render(<App />, document.getElementById("root"));
