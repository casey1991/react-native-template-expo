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
const TheMessagedMessageComponent = withStyles(MeComponent, theMessage => ({
  container: { backgroundColor: theMessage["background-basic-color-1"] }
}));
export default TheMessagedMessageComponent;
export const MessageScreen = TheMessagedMessageComponent;
