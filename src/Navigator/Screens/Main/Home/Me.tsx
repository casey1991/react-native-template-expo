import React from "react";
import { View, StyleSheet } from "react-native";
import { withStyles, ThemedComponentProps } from "react-native-ui-kitten";

export interface MeProps extends ThemedComponentProps {}
class MeComponent extends React.Component<MeProps> {
  render() {
    const { themedStyle } = this.props;
    return (
      <View style={[styles.container, themedStyle.container]}>{/*  */}</View>
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
const ThemedMeComponent = withStyles(MeComponent, theme => ({
  container: { backgroundColor: theme["background-basic-color-1"] }
}));
export default ThemedMeComponent;
export const MeScreen = ThemedMeComponent;
