import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { AppNavigator } from "./Navigator/AppStack";
export class App extends React.Component {
  render() {
    return (
      <PaperProvider>
        <AppNavigator />
      </PaperProvider>
    );
  }
}
