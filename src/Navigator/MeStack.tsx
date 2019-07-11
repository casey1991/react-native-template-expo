import React from "react";
import { createStackNavigator } from "react-navigation";
import { Constants } from "~/Libs/NavigationService";
import { MeScreen } from "./Screens/Main/Home";
import { NormalTopNavigation } from "~/Components";
export const MeStack = createStackNavigator({
  [Constants.Screens.ME]: {
    screen: MeScreen,
    navigationOptions: () => ({
      header: (
        <NormalTopNavigation
          forceInset={{ top: "always", bottom: "never" }}
          title={"Me"}
          alignment="center"
        />
      )
    })
  }
});
export default MeStack;
