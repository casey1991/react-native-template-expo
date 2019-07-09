import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button } from "react-native-ui-kitten";
class HomeScreenComponent extends React.Component {
  render() {
    return (
      <View style={[styles.container]}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center"
  }
});
export default HomeScreenComponent;
export const HomeScreen = HomeScreenComponent;
