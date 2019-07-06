import { createBottomTabNavigator } from "react-navigation";
import {
  HomeScreen,
  MeScreen,
  MessageScreen,
  SearchScreen
} from "./Screens/Main/Home";
import { Constants } from "~/Libs/NavigationService";
import i18n, { Constants as I18nConstants } from "~/Libs/i18n";
export const MainStack = createBottomTabNavigator({
  [Constants.HOME]: {
    screen: HomeScreen,
    navigationOptions: () => ({ title: i18n.t("navigation:tabs.home") })
  },
  [Constants.SEARCH]: { screen: SearchScreen },
  [Constants.MESSAGE]: {
    screen: MessageScreen
  },
  [Constants.ME]: {
    screen: MeScreen
  }
});
