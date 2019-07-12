import React, { ReactElement } from "react";
import { map } from "lodash";
import {
  createBottomTabNavigator,
  SafeAreaView,
  NavigationScreenProp,
  NavigationRoute,
  TabScene,
  createStackNavigator,
  NavigationScreenProps
} from "react-navigation";
import {
  BottomNavigation,
  BottomNavigationTab,
  TopNavigationAction,
  Layout
} from "react-native-ui-kitten";
import { Constants } from "~/Libs/NavigationService";
import {
  HomeScreen,
  SearchScreen,
  MessageScreen,
  MeScreen
} from "./Screens/Main/Home";
import i18n from "~/Libs/i18n";
import { NormalTopNavigation } from "~/Components";
import { SettingIcon } from "~/assets/icons";
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
    <Layout>
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
                  props &&
                  props.getLabelText({ route, focused: false, index: 0 })
                }
                onPress={() => {
                  navigation && navigation.navigate(route.routeName);
                }}
              />
            );
          })}
        </BottomNavigation>
      </SafeAreaView>
    </Layout>
  );
};

export const HomeStack = createStackNavigator({
  TabHomeScreen: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }: NavigationScreenProps) => ({
      header: (
        <NormalTopNavigation
          forceInset={{ top: "always", bottom: "never" }}
          title={i18n.t("navigation:tabs.home")}
          alignment="center"
        />
      )
    })
  }
});

const SearchStack = createStackNavigator({
  TabSearchScreen: {
    screen: SearchScreen,
    navigationOptions: ({ navigation }: NavigationScreenProps) => ({
      header: (
        <NormalTopNavigation
          forceInset={{ top: "always", bottom: "never" }}
          title={i18n.t("navigation:tabs.search")}
          alignment="center"
        />
      )
    })
  }
});

const MessagesStack = createStackNavigator({
  TabMessagesScreen: {
    screen: MessageScreen,
    navigationOptions: ({ navigation }: NavigationScreenProps) => ({
      header: (
        <NormalTopNavigation
          forceInset={{ top: "always", bottom: "never" }}
          title={i18n.t("navigation:tabs.messages")}
          alignment="center"
        />
      )
    })
  }
});
export const MeStack = createStackNavigator({
  TabMeScreen: {
    screen: MeScreen,
    navigationOptions: ({ navigation }: NavigationScreenProps) => ({
      header: (
        <NormalTopNavigation
          forceInset={{ top: "always", bottom: "never" }}
          title={i18n.t("navigation:tabs.me")}
          alignment="center"
          rightControls={[
            <TopNavigationAction
              icon={SettingIcon}
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

export const TabStack = createBottomTabNavigator(
  {
    [Constants.Screens.HOME]: {
      screen: HomeStack,
      navigationOptions: () => ({
        title: i18n.t("navigation:tabs.home")
      })
    },
    [Constants.Screens.SEARCH]: {
      screen: SearchStack,
      navigationOptions: () => ({
        title: i18n.t("navigation:tabs.search")
      })
    },
    [Constants.Screens.MESSAGES]: {
      screen: MessagesStack,
      navigationOptions: () => ({ title: i18n.t("navigation:tabs.messages") })
    },
    [Constants.Screens.ME]: {
      screen: MeStack,
      navigationOptions: () => ({ title: i18n.t("navigation:tabs.me") })
    }
  },
  {
    tabBarComponent: BottomNavigationComponent
  }
);
