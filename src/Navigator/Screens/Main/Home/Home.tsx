import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button } from "react-native-ui-kitten";
import { ThemeContext, ThemeKey } from "~/Libs/Themes";
class HomeScreenComponent extends React.Component {
  render() {
    return (
      <View style={[styles.container]}>
        <ThemeContext.Consumer>
          {({ toggleTheme, currentTheme }) => {
            return (
              <Button
                onPress={() => {
                  if (currentTheme === "Normal Light") {
                    toggleTheme("Normal Dark");
                  } else {
                    toggleTheme("Normal Light");
                  }
                }}
              >
                Toggle
              </Button>
            );
          }}
        </ThemeContext.Consumer>
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
