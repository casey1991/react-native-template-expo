import { NavigationActions } from "react-navigation";
import { shouldAuthed } from "./utils";
let _navigator = null;
export const setTopLevelNavigator = ref => {
  _navigator = ref;
};
export const navigate = (routeName, params) => {
  const shouldAuthed = shouldAuthed(routeName);
  //check token
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  );
};
