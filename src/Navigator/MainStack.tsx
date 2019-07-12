import { createStackNavigator } from "react-navigation";
import { Constants } from "~/Libs/NavigationService";
import { TabStack } from "./TabStack";
import SettingStack from "./SettingStack";
export const MainStack = createStackNavigator(
  {
    [Constants.Stacks.TAB_STACK]: {
      screen: TabStack
    },
    [Constants.Stacks.SETTING_STACK]: {
      screen: SettingStack
    }
  },
  {
    headerMode: "none"
  }
);
export default MainStack;
