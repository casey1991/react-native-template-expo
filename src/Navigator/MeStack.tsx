import React from "react";
import { createStackNavigator } from "react-navigation";
import { Constants } from "~/Libs/NavigationService";
import { MeScreen } from "./Screens/Main/Home";
import { NormalTopNavigation } from "~/Components";
import { NavigationScreenProps } from "react-navigation";
import { TopNavigationAction } from "react-native-ui-kitten";
import { ActivityOutlineIcon } from "~/assets/icons";
export const MeStack = createStackNavigator({
  [Constants.Screens.ME]: {
    screen: MeScreen,
    navigationOptions: ({ navigation }: NavigationScreenProps) => ({
      header: (
        <NormalTopNavigation
          forceInset={{ top: "always", bottom: "never" }}
          title={"Me"}
          alignment="center"
          rightControls={[
            <TopNavigationAction
              icon={ActivityOutlineIcon}
              onPress={() => {
                const onSettingPress = navigation.getParam(
                  "onSettingPress",
                  () => {}
                );
                onSettingPress();
              }}
            />
          ]}
        />
      )
    })
  }
});
export default MeStack;
