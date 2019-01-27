import { NavigationActions } from "react-navigation";
import { shouldAuthed } from "./utils";
export { default as Constants } from "./Constants";

let _navigator = null;
export const setTopLevelNavigator = ref => {
  _navigator = ref;
};
export const navigate = (routeName, params) => {
  //check token
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  );
};
export const isAuthed = routeName => {
  const should = shouldAuthed(routeName);
  return true;
};
