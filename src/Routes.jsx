import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import history from "./history";

function Routes() {
  return (
    <BrowserRouter history={history}>
      <Route path="/login" exact component={Login} />
      <Route path="/" exact component={HomePage} />
    </BrowserRouter>
  );
}

export default Routes;
