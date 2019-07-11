import React, { ReactElement } from "react";
import { map } from "lodash";
import {
  createBottomTabNavigator,
  SafeAreaView,
  NavigationScreenProp,
  NavigationRoute,
  TabScene
} from "react-navigation";
import { BottomNavigation, BottomNavigationTab } from "react-native-ui-kitten";
import { Constants } from "~/Libs/NavigationService";
import MainStack from "./MainStack";
import SearchStack from "./SearchStack";
import MessageStack from "./MessageStack";
import MeStack from "./MeStack";
import i18n from "~/Libs/i18n";
interface BottomNavigationProps {
  onTabPress: (routeName: string) => void;
  navigation: NavigationScreenProp<NavigationRoute>;
  getLabelText: (scene: TabScene) => string;
}

export const BottomNavigationComponent = (
  props: BottomNavigationProps
): ReactElement<BottomNavigationProps> => {
  const navigation = props.navigation;
  const state = navigation.state;
  const routes = state.routes;
  return (
    <SafeAreaView forceInset={{ top: "never", bottom: "always" }}>
      <BottomNavigation
        onSelect={index => {
          if (navigation && routes) {
            navigation.navigate(routes[index].routeName);
          }
        }}
        selectedIndex={state.index}
      >
        {map(state.routes, route => {
          return (
            <BottomNavigationTab
              key={route.key}
              title={
                props && props.getLabelText({ route, focused: false, index: 0 })
              }
              onPress={() => {
                navigation && navigation.navigate(route.routeName);
              }}
            />
          );
        })}
      </BottomNavigation>
    </SafeAreaView>
  );
};
export const TabStack = createBottomTabNavigator(
  {
    [Constants.Stacks.MAIN_STACK]: {
      screen: MainStack,
      navigationOptions: () => ({ title: i18n.t("navigation:tabs.home") })
    },
    [Constants.Stacks.SEARCH_STACK]: {
      screen: SearchStack,
      navigationOptions: () => ({ title: i18n.t("navigation:tabs.search") })
    },
    [Constants.Stacks.MESSAGE_STACK]: {
      screen: MessageStack,
      navigationOptions: () => ({ title: i18n.t("navigation:tabs.message") })
    },
    [Constants.Stacks.ME_STACK]: {
      screen: MeStack,
      navigationOptions: () => ({ title: i18n.t("navigation:tabs.me") })
    }
  },
  {
    tabBarComponent: BottomNavigationComponent
  }
);
