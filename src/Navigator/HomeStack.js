import { createBottomTabNavigator } from "react-navigation";
import {
  HomeScreen,
  MeScreen,
  MessageScreen,
  SearchScreen
} from "./Screens/Home";
export const HomeStack = createBottomTabNavigator({
  Home: {
    screen: HomeScreen
  },
  Search: { screen: SearchScreen },
  Message: {
    screen: MessageScreen
  },
  Me: {
    screen: MeScreen
  }
});
