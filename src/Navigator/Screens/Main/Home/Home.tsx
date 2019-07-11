import React from "react";
import { View, StyleSheet } from "react-native";
import {
  Button,
  withStyles,
  ThemedComponentProps
} from "react-native-ui-kitten";
import { ThemeContext } from "~/Libs/Themes";

export interface HomeProps extends ThemedComponentProps {}
class HomeComponent extends React.Component<HomeProps> {
  render() {
    const { themedStyle } = this.props;
    return (
      <View style={[styles.container, themedStyle.container]}>
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
const ThemedHomeComponent = withStyles(HomeComponent, theme => ({
  container: { backgroundColor: theme["background-basic-color-1"] }
}));
export default ThemedHomeComponent;
export const HomeScreen = ThemedHomeComponent;
