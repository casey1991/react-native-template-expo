import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { I18nextProvider, withNamespaces } from "react-i18next";
import { mapping } from "@eva-design/eva";
import {
  ApplicationProvider as ThemeProvider,
  Layout
} from "react-native-ui-kitten";
import { ApolloProvider } from "react-apollo";
import { createApolloClient } from "~/Libs/Apollo";
import { createStore } from "~/Libs/Redux";
import { setTopLevelNavigator } from "~/Libs/NavigationService";
import i18n from "~/Libs/i18n";
import { AppNavigator } from "~/Navigator/AppStack";
import { NavigationContainerComponent } from "react-navigation";
import {
  ThemeContext,
  ThemeContextType,
  findCurrentTheme,
  ThemeType,
  Constants
} from "./Libs/Themes";
const WrappedStack = ({ t }: any) => (
  <AppNavigator
    screenProps={{ t, i18n }}
    ref={(navigatorRef: NavigationContainerComponent) => {
      setTopLevelNavigator(navigatorRef);
    }}
  />
);
const ReloadAppOnLanguageChange = withNamespaces()(WrappedStack);

interface AppProps {}
interface AppState {
  themeMapping: string;
  themeType: string;
}
export class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      themeType: Constants.themes.LIGHT,
      themeMapping: Constants.mapping.NORMAL
    };
  }
  _onSwitchTheme = (theme: ThemeType) => {
    this.setState({ themeType: theme.theme, themeMapping: theme.mapping });
  };
  _onSwitchThemeMode = (mode: string) => {
    this.setState({ themeType: mode });
  };
  render() {
    const contextValue: ThemeContextType = {
      currentTheme: {
        theme: this.state.themeType,
        mapping: this.state.themeMapping
      },
      toggleTheme: this._onSwitchTheme,
      toggleThemeMode: this._onSwitchThemeMode
    };

    return (
      <ThemeContext.Provider value={contextValue}>
        <ThemeProvider
          mapping={mapping}
          theme={
            findCurrentTheme(this.state.themeType, this.state.themeMapping)
              .theme
          }
          customMapping={
            findCurrentTheme(this.state.themeType, this.state.themeMapping)
              .mapping
          }
        >
          <ReduxProvider store={createStore()}>
            <ApolloProvider client={createApolloClient()}>
              <I18nextProvider i18n={i18n}>
                <Layout style={{ flex: 1 }}>
                  <ReloadAppOnLanguageChange />
                </Layout>
              </I18nextProvider>
            </ApolloProvider>
          </ReduxProvider>
        </ThemeProvider>
      </ThemeContext.Provider>
    );
  }
}
