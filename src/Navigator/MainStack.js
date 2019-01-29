import { createStackNavigator } from "react-navigation";
import { Constants } from "~/Libs/NavigationService";
import { HomeStack } from "./HomeStack";
export const MainStack = createStackNavigator(
  { [Constants.HOME_STACK]: { screen: HomeStack } },
  { headerMode: "none" }
);
