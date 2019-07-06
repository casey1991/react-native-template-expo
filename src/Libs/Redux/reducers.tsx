import { combineReducers, Reducer, AnyAction } from "redux";
import { reducer as app } from "./App";
export let rootReducer: Reducer<{ app: unknown }, AnyAction>;
export const createReducers = () => {
  if (rootReducer) return rootReducer;
  rootReducer = combineReducers({ app });
  return rootReducer;
};
