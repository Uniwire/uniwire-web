import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import StudentResidences from "./pages/StudentResidences";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={HomePage} />
      <Route path="/login" component={Login} />
      <Route path="/residences" component={StudentResidences} />
    </BrowserRouter>
  );
}

export default Routes;
