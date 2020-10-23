import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from "../pages/Login";
import HomePage from "../pages/HomePage";
import UniversityMap from "../pages/UniversityMap";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" exact component={Login} />
        <Route path="/map" exact component={UniversityMap} />
      </Switch>
    </BrowserRouter>
  );
}
