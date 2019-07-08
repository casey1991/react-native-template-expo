import {
  NavigationActions,
  NavigationContainerComponent,
  NavigationNavigateAction
} from "react-navigation";
export { default as Constants } from "./Constants";

let _navigator: NavigationContainerComponent;
export const setTopLevelNavigator = (ref: NavigationContainerComponent) => {
  _navigator = ref;
};
export function navigate<NavigationParams>(
  routeName: string,
  params?: NavigationParams,
  action?: NavigationNavigateAction,
  key?: string
) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
      action,
      key
    })
  );
}
export function goBack(key?: string) {
  _navigator.dispatch(
    NavigationActions.back({
      key: key
    })
  );
}
