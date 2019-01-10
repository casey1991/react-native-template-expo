import { createBottomTabNavigator } from "react-navigation";
import { HomeScreen, MeScreen, MessageScreen } from "./Screens/Home";
export const HomeStack = createBottomTabNavigator({
  Home: {
    screen: HomeScreen
  },
  Me: {
    screen: MeScreen
  },
  Message: {
    screen: MessageScreen
  }
});
