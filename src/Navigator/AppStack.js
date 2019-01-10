import { createStackNavigator, createAppContainer } from "react-navigation";
import { HomeStack } from "./HomeStack";
const AppStack = createStackNavigator({
  Home: {
    screen: HomeStack
  }
});
export const AppNavigator = createAppContainer(AppStack);
