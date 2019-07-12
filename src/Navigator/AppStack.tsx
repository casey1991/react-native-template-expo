import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { AuthStack } from "./AuthStack";
import { Constants } from "~/Libs/NavigationService";
import MainStack from "./MainStack";
const AppStack = createSwitchNavigator({
  [Constants.Stacks.MAIN_STACK]: { screen: MainStack },
  [Constants.Stacks.AUTH_STACK]: { screen: AuthStack }
});
export const AppNavigator = createAppContainer(AppStack);
