import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { HomeStack } from "./HomeStack";
import { AuthStack } from "./AuthStack";
const AppStack = createSwitchNavigator({
  HomeStack,
  AuthStack
});
export const AppNavigator = createAppContainer(AppStack);
