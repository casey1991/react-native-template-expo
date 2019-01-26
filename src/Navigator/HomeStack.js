import { createBottomTabNavigator } from "react-navigation";
import {
  HomeScreen,
  MeScreen,
  MessageScreen,
  AnimationScreen
} from "./Screens/Home";
export const HomeStack = createBottomTabNavigator({
  Home: {
    screen: HomeScreen
  },
  Animation: {
    screen: AnimationScreen
  },
  Message: {
    screen: MessageScreen
  },
  Me: {
    screen: MeScreen
  }
});
