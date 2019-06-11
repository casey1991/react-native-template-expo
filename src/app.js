import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { Provider as PaperProvider } from "react-native-paper";
import { I18nextProvider } from "react-i18next";
import { ApolloProvider } from "react-apollo";
import { createApolloClient } from "~/Libs/Apollo";
import { createStore } from "~/Libs/Redux";
import { setTopLevelNavigator } from "~/Libs/NavigationService";
import i18n from "~/Libs/i18n";
import { AppNavigator } from "~/Navigator/AppStack";
export class App extends React.Component {
  render() {
    return (
      <ReduxProvider store={createStore()}>
        <ApolloProvider client={createApolloClient()}>
          <PaperProvider>
            <I18nextProvider i18n={i18n}>
              <AppNavigator ref={ref => setTopLevelNavigator(ref)} />
            </I18nextProvider>
          </PaperProvider>
        </ApolloProvider>
      </ReduxProvider>
    );
  }
}
