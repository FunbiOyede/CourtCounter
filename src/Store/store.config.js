import { createStore, compose, applyMiddleware } from "redux";
import { TeamNames } from "../Store/reducer/index";
import thunk from "redux-thunk";
// for dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const Store = createStore(
  TeamNames,
  composeEnhancers(applyMiddleware(thunk))
);
