import React from "react";
import { View, StyleSheet } from "react-native";
import { withStyles, ThemedComponentProps } from "react-native-ui-kitten";

export interface MessagesProps extends ThemedComponentProps {}
class MessagesComponent extends React.Component<MessagesProps> {
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
const ThemedMessagesComponent = withStyles(MessagesComponent, theMessage => ({
  container: { backgroundColor: theMessage["background-basic-color-1"] }
}));
export default ThemedMessagesComponent;
export const MessagesScreen = ThemedMessagesComponent;
