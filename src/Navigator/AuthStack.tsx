import { createStackNavigator } from "react-navigation";
import { LoginScreen, ForgotScreen } from "./Screens/Auth";
import { Constants } from "~/Libs/NavigationService";
export const AuthStack = createStackNavigator(
  {
    [Constants.LOGIN]: { screen: LoginScreen },
    [Constants.FORGOT]: { screen: ForgotScreen }
  },
  {
    mode: "card",
    headerMode: "none"
  }
);
