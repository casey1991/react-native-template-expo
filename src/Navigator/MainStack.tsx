import React, { ReactElement } from "react";
import { map } from "lodash";
import {
  createBottomTabNavigator,
  SafeAreaView,
  NavigationScreenProp,
  NavigationRoute,
  NavigationContainerProps
} from "react-navigation";
import { BottomNavigation, BottomNavigationTab } from "react-native-ui-kitten";
import {
  HomeScreen,
  MeScreen,
  MessageScreen,
  SearchScreen
} from "./Screens/Main/Home";
import { Constants } from "~/Libs/NavigationService";
import i18n from "~/Libs/i18n";
interface BottomNavigationProps {
  onTabPress: (routeName: string) => void;
  navigation?: NavigationScreenProp<NavigationRoute>;
}

export const BottomNavigationComponent = (
  props?: BottomNavigationProps
): ReactElement<BottomNavigationProps> => {
  const state = props && props.navigation && props.navigation.state;

  const navigation = props && props.navigation;
  const currentIndex = state && state.index;
  const routes = state && state.routes;
  return (
    <SafeAreaView forceInset={{ top: "never", bottom: "always" }}>
      <BottomNavigation
        onSelect={index => {
          if (navigation && routes) {
            navigation.navigate(routes[index].routeName);
          }
        }}
        selectedIndex={currentIndex}
      >
        {map(state && state.routes, route => {
          return (
            <BottomNavigationTab
              key={route.key}
              title={route.routeName}
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
export const MainStack = createBottomTabNavigator(
  {
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
  },
  {
    tabBarComponent: BottomNavigationComponent
  }
);
