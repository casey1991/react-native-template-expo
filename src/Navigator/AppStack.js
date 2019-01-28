import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { MainStack } from "./MainStack";
import { AuthStack } from "./AuthStack";
const AppStack = createSwitchNavigator({
  MainStack,
  AuthStack
});
export const AppNavigator = createAppContainer(AppStack);
