import { createStore as reduxCreateStore, applyMiddleware, Store } from "redux";
import { authMiddleware } from "./middlewares";
import { composeWithDevTools } from "redux-devtools-extension";

import { createReducers } from "./reducers";
export let store: Store;
export const createStore = (): Store => {
  if (store) return store;
  store = reduxCreateStore(
    createReducers(),
    composeWithDevTools(applyMiddleware(authMiddleware))
  );
  return store;
};
