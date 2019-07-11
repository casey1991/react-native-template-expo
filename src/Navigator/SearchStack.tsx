import React from "react";
import { createStackNavigator } from "react-navigation";
import { Constants } from "~/Libs/NavigationService";
import { SearchScreen } from "./Screens/Main/Home";
import { NormalTopNavigation } from "~/Components";
export const SearchStack = createStackNavigator({
  [Constants.Screens.SEARCH]: {
    screen: SearchScreen,
    navigationOptions: () => ({
      header: (
        <NormalTopNavigation
          forceInset={{ top: "always", bottom: "never" }}
          title={"Search"}
          alignment="center"
        />
      )
    })
  }
});
export default SearchStack;
