import { some } from "lodash";
import { MESSAGE, ME } from "./Constants";
const shoudeAuth = [MESSAGE, ME];
export const shouldAuthed = routeName => {
  return some(shoudeAuth, item => item === routeName);
};
