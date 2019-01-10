import { createDrawerNavigator } from "react-navigation";
import {
  HomeScreen,
  MeScreen,
  MessageScreen,
  AnimationScreen
} from "./Screens/Home";
export const HomeStack = createDrawerNavigator({
  Home: {
    screen: HomeScreen
  },
  Me: {
    screen: MeScreen
  },
  Message: {
    screen: MessageScreen
  },
  Animation: {
    screen: AnimationScreen
  }
});
