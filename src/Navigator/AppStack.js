import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { HomeStack } from "./HomeStack";
import { AuthStack } from "./AuthStack";
const AppStack = createSwitchNavigator({
  Home: {
    screen: HomeStack
  },
  Auth: {
    screen: AuthStack
  }
});
export const AppNavigator = createAppContainer(AppStack);
