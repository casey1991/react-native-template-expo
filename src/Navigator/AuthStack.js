import { createStackNavigator } from "react-navigation";
import { LoginScreen } from "./Screens/Auth";
export const AuthStack = createStackNavigator(
  { Login: { screen: LoginScreen } },
  { mode: "card" }
);
