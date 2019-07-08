import { combineReducers, Reducer } from "redux";
import { reducer as app } from "./App";
export let rootReducer: Reducer<any>;
export const createReducers = () => {
  if (rootReducer) return rootReducer;
  rootReducer = combineReducers({ app });
  return rootReducer;
};
