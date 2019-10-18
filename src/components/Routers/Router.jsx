import React from "react";
import { Route, Switch } from "react-router-dom";
import StartGame from "../../container/Start/StartGame";
import HomePage from "../../container/HomePage/HomePage";

const Router = props => (
  <Switch>
    <Route path="/StartGame" extact component={StartGame} />

    <Route path="/" exact component={HomePage} />
  </Switch>
);

export default Router;
