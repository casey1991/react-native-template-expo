import { createStore as reduxCreateStore, applyMiddleware } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";

import { createReducers } from "./reducers";
export let store = null;
export const createStore = () => {
  if (store) return store;
  store = reduxCreateStore(createReducers(), devToolsEnhancer({}));
  return store;
};
