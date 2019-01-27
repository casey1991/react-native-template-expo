import { createStackNavigator } from "react-navigation";
import { LoginScreen } from "./Screens/Auth";
import { Constants } from "../Libs/NavigationService";
export const AuthStack = createStackNavigator(
  { [Constants.LOGIN]: { screen: LoginScreen } },
  { mode: "card" }
);
