import { createStore as reduxCreateStore, applyMiddleware } from "redux";
import { authMiddleware } from "./middlewares";
import { composeWithDevTools } from "redux-devtools-extension";

import { createReducers } from "./reducers";
export let store = null;
export const createStore = () => {
  if (store) return store;
  store = reduxCreateStore(
    createReducers(),
    composeWithDevTools(applyMiddleware(authMiddleware))
  );
  return store;
};
