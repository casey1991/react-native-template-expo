import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { MainStack } from "./MainStack";
import { AuthStack } from "./AuthStack";
import { Constants } from "~/Libs/NavigationService";
const AppStack = createSwitchNavigator({
  [Constants.MAIN_STACK]: { screen: MainStack },
  [Constants.AUTH_STACK]: { screen: AuthStack }
});
export const AppNavigator = createAppContainer(AppStack);
