import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { I18nextProvider, withNamespaces } from "react-i18next";
import { mapping } from "@eva-design/eva";
import {
  ApplicationProvider as ThemeProvider,
  Layout,
  ThemeType
} from "react-native-ui-kitten";
import { ApolloProvider } from "react-apollo";
import { createApolloClient } from "~/Libs/Apollo";
import { createStore } from "~/Libs/Redux";
import { setTopLevelNavigator } from "~/Libs/NavigationService";
import i18n from "~/Libs/i18n";
import { AppNavigator } from "~/Navigator/AppStack";
import { NavigationContainerComponent } from "react-navigation";
import { normalThemeMapping } from "~/Libs/Themes/normal";
import {
  ThemeContext,
  ThemeContextType,
  themes,
  ThemeKey
} from "./Libs/Themes";
// import customMapping from "./Libs/Themes/normal/custom-mapping.json";
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
  theme: ThemeKey;
}
export class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      theme: "Normal Light"
    };
  }
  _onSwitchTheme = (theme: ThemeType) => {
    this.setState({ theme: theme });
  };
  render() {
    const contextValue: ThemeContextType = {
      currentTheme: this.state.theme,
      toggleTheme: this._onSwitchTheme
    };
    return (
      <ThemeContext.Provider value={contextValue}>
        <ThemeProvider
          mapping={mapping}
          theme={themes[this.state.theme]}
          customMapping={normalThemeMapping}
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
