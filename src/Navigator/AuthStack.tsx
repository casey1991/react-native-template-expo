import { createStackNavigator } from "react-navigation";
import { LoginScreen } from "./Screens/Auth";
import { Constants } from "~/Libs/NavigationService";
import Forgot from "~/Navigator/Screens/Auth/Forgot";
export const AuthStack = createStackNavigator(
  {
    [Constants.LOGIN]: { screen: LoginScreen },
    [Constants.FORGOT]: { screen: Forgot }
  },
  {
    mode: "card",
    headerMode: "none"
  }
);
