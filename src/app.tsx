import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { Provider as PaperProvider } from "react-native-paper";
import { I18nextProvider, withNamespaces } from "react-i18next";
import { mapping, light as lightTheme } from "@eva-design/eva";
import { ApplicationProvider, Layout } from "react-native-ui-kitten";
import { ApolloProvider } from "react-apollo";
import { createApolloClient } from "~/Libs/Apollo";
import { createStore } from "~/Libs/Redux";
import { setTopLevelNavigator } from "~/Libs/NavigationService";
import i18n from "~/Libs/i18n";
import { AppNavigator } from "~/Navigator/AppStack";
import { NavigationContainerComponent } from "react-navigation";
const WrappedStack = ({ t }: any) => (
  <AppNavigator
    screenProps={{ t, i18n }}
    ref={(navigatorRef: NavigationContainerComponent) => {
      setTopLevelNavigator(navigatorRef);
    }}
  />
);
const ReloadAppOnLanguageChange = withNamespaces()(WrappedStack);

export class App extends React.Component {
  render() {
    return (
      <ReduxProvider store={createStore()}>
        <ApolloProvider client={createApolloClient()}>
          <PaperProvider>
            <I18nextProvider i18n={i18n}>
              <ApplicationProvider mapping={mapping} theme={lightTheme}>
                <Layout style={{ flex: 1 }}>
                  <ReloadAppOnLanguageChange />
                </Layout>
              </ApplicationProvider>
            </I18nextProvider>
          </PaperProvider>
        </ApolloProvider>
      </ReduxProvider>
    );
  }
}
