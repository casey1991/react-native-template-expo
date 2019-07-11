import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { TabStack } from "./TabStack";
import { AuthStack } from "./AuthStack";
import { Constants } from "~/Libs/NavigationService";
const AppStack = createSwitchNavigator({
  [Constants.Stacks.TAB_STACK]: { screen: TabStack },
  [Constants.Stacks.AUTH_STACK]: { screen: AuthStack }
});
export const AppNavigator = createAppContainer(AppStack);
