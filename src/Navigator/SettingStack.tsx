import React from "react";
import { createStackNavigator } from "react-navigation";
import { Constants } from "~/Libs/NavigationService";
import { NormalTopNavigation } from "~/Components";
import { NavigationScreenProps } from "react-navigation";

import { SettingScreen } from "./Screens";
import { TopNavigationAction } from "react-native-ui-kitten";
import { ArrowLeftIcon } from "~/assets/icons";
export const SettingStack = createStackNavigator({
  [Constants.Screens.SETTING]: {
    screen: SettingScreen,
    navigationOptions: ({ navigation }: NavigationScreenProps) => ({
      header: (
        <NormalTopNavigation
          forceInset={{ top: "always", bottom: "never" }}
          title={"Setting"}
          alignment="center"
          leftControl={
            <TopNavigationAction
              icon={ArrowLeftIcon}
              onPress={() => {
                navigation.goBack(null);
              }}
            />
          }
        />
      )
    })
  }
});
export default SettingStack;
