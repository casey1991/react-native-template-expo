import { createStackNavigator } from "react-navigation";
import { HomeStack } from "./HomeStack";
export const MainStack = createStackNavigator(
  { HomeStack },
  { headerMode: "none" }
);
