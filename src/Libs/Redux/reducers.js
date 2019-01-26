import { combineReducers } from "redux";
import { reducer as app } from "./App";
export let rootReducer = null;
export const createReducers = () => {
  if (rootReducer) return rootReducer;
  rootReducer = combineReducers({ app });
  return rootReducer;
};
