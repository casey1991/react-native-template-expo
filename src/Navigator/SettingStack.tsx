import React from "react";
import { createStackNavigator } from "react-navigation";
import { Constants } from "~/Libs/NavigationService";
import { NormalTopNavigation } from "~/Components";
import { NavigationScreenProps } from "react-navigation";

import { SettingScreen } from "./Screens";
export const SettingStack = createStackNavigator({
  [Constants.Screens.SETTING]: {
    screen: SettingScreen,
    navigationOptions: ({ navigation }: NavigationScreenProps) => ({
      header: (
        <NormalTopNavigation
          forceInset={{ top: "always", bottom: "never" }}
          title={"Setting"}
          alignment="center"
        />
      )
    })
  }
});
export default SettingStack;
