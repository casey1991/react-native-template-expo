import { handleActions } from "redux-actions";
import { INCREMENT, DECREMENT } from "./actions";
export const defaultState = { counter: 0 };
export const reducer = handleActions(
  {
    [INCREMENT]: (state, action) => ({
      counter: state.counter + action.payload
    }),

    [DECREMENT]: (state, action) => ({
      counter: state.counter - action.payload
    })
  },
  defaultState
);
