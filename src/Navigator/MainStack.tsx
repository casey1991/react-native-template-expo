import React from "react";
import { createStackNavigator } from "react-navigation";
import { Constants } from "~/Libs/NavigationService";
import { HomeScreen } from "./Screens/Main/Home";
import { NormalTopNavigation } from "~/Components";
export const MainStack = createStackNavigator({
  [Constants.Screens.HOME]: {
    screen: HomeScreen,
    navigationOptions: () => ({
      header: (
        <NormalTopNavigation
          forceInset={{ top: "always", bottom: "never" }}
          title={"Home"}
          alignment="center"
        />
      )
    })
  }
});
export default MainStack;
