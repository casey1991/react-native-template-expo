import { NavigationActions } from "react-navigation";
import { AsyncStorage } from "react-native";
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
export const isAuthed = (routeName, callback) => {
  const should = shouldAuthed(routeName);
  if (!should) {
    callback(null, true);
  } else {
    AsyncStorage.getItem("token", (error, token) => {
      if (error) {
        callback(error, false);
        return;
      }
      if (token) {
        callback(null, true);
        return;
      }
      callback(null, false);
    });
  }
};
