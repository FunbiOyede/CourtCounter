import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import FirstTeam from "./Store/Reducer/FirstTeamReducer";
import SecondTeam from "./Store/Reducer/SecondTeamReducer";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const MainReducer = combineReducers({
  first: FirstTeam,
  second: SecondTeam
});
const store = createStore(MainReducer);
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
