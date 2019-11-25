import React from "react";
import { Route, Switch } from "react-router-dom";

const startGame = React.lazy(() => import("../../container/Start/StartGame"));
const HomePage = React.lazy(() => import("../../container/HomePage/HomePage"));
const Router = props => (
  <Switch>
    <React.Suspense fallback={<p>Please wait</p>}>
      <Route path="/StartGame" extact component={startGame} />
      <Route path="/" exact component={HomePage} />
    </React.Suspense>
  </Switch>
);

export default Router;
