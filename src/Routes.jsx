import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={HomePage} />
      <Route path="/login" component={Login} />
    </BrowserRouter>
  );
}

export default Routes;
