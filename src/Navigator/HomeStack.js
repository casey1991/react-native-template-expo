import { createBottomTabNavigator } from "react-navigation";
import {
  HomeScreen,
  MeScreen,
  MessageScreen,
  SearchScreen
} from "./Screens/Main/Home";
import { Constants } from "~/Libs/NavigationService";
export const HomeStack = createBottomTabNavigator({
  [Constants.HOME]: {
    screen: HomeScreen
  },
  [Constants.SEARCH]: { screen: SearchScreen },
  [Constants.MESSAGE]: {
    screen: MessageScreen
  },
  [Constants.ME]: {
    screen: MeScreen
  }
});
