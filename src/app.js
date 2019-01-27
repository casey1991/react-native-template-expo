import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { Provider as PaperProvider } from "react-native-paper";
import { ApolloProvider } from "react-apollo";
import { createApolloClient } from "./Libs/Apollo";
import { createStore } from "./Libs/Redux";
import { setTopLevelNavigator } from "./Libs/NavigationService";
import { AppNavigator } from "./Navigator/AppStack";
export class App extends React.Component {
  render() {
    return (
      <ReduxProvider store={createStore()}>
        <ApolloProvider client={createApolloClient()}>
          <PaperProvider>
            <AppNavigator ref={ref => setTopLevelNavigator(ref)} />
          </PaperProvider>
        </ApolloProvider>
      </ReduxProvider>
    );
  }
}
