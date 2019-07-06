import { NavigationActions } from "react-navigation";
import { shouldAuthed } from "./utils";
import { LOGIN } from "./Constants";
import { validateToken } from "../Auth";
export { default as Constants } from "./Constants";

let _navigator = null;
export const setTopLevelNavigator = ref => {
  _navigator = ref;
};
export const navigate = (routeName, params) => {
  isAuthed(routeName, (error, pass) => {
    if (pass) {
      routeName = routeName;
    } else {
      routeName = LOGIN;
    }
    _navigator.dispatch(
      NavigationActions.navigate({
        routeName,
        params
      })
    );
  });
};
export const goBack = key => {
  _navigator.dispatch(
    NavigationActions.back({
      key: key
    })
  );
};
export const isAuthed = (routeName, callback) => {
  const should = shouldAuthed(routeName);
  if (!should) {
    callback(null, true);
  } else {
    validateToken((error, token) => {
      if (token) {
        callback(null, true);
      } else {
        callback(false, false);
      }
    });
  }
};
