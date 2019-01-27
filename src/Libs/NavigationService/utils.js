import { find } from "lodash";
import { MESSAGE, ME } from "./Constants";
const shoudeAuth = [MESSAGE, ME];
export const shouldAuthed = routeName => {
  return find(shoudeAuth, item => item === routeName);
};
