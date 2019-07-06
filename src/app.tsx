import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { Provider as PaperProvider } from "react-native-paper";
import { I18nextProvider, withNamespaces } from "react-i18next";
import { ApolloProvider } from "react-apollo";
import { createApolloClient } from "~/Libs/Apollo";
import { createStore } from "~/Libs/Redux";
import { setTopLevelNavigator } from "~/Libs/NavigationService";
import i18n from "~/Libs/i18n";
import { AppNavigator } from "~/Navigator/AppStack";
const WrappedStack = ({ t }) => (
  <AppNavigator
    screenProps={{ t, i18n }}
    ref={navigatorRef => {
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
              <ReloadAppOnLanguageChange />
            </I18nextProvider>
          </PaperProvider>
        </ApolloProvider>
      </ReduxProvider>
    );
  }
}
