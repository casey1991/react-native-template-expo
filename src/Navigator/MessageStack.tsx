import React from "react";
import { createStackNavigator } from "react-navigation";
import { Constants } from "~/Libs/NavigationService";
import { MessageScreen } from "./Screens/Main/Home";
import { NormalTopNavigation } from "~/Components";
export const MessageStack = createStackNavigator({
  [Constants.Screens.HOME]: {
    screen: MessageScreen,
    navigationOptions: () => ({
      header: (
        <NormalTopNavigation
          forceInset={{ top: "always", bottom: "never" }}
          title={"Message"}
          alignment="center"
        />
      )
    })
  }
});
export default MessageStack;
