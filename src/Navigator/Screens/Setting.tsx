import React from "react";
import { View, StyleSheet } from "react-native";
import { withStyles, ThemedComponentProps } from "react-native-ui-kitten";
import { NavigationScreenProp, NavigationRoute } from "react-navigation";

export interface SettingProps extends ThemedComponentProps {
  navigation: NavigationScreenProp<NavigationRoute<any>>;
}
class SettingComponent extends React.Component<SettingProps> {
  componentDidMount() {
    // navigation params
  }
  render() {
    const { themedStyle } = this.props;
    return (
      <View style={[styles.container, themedStyle.container]}>{/*  */}</View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
const ThemedSettingComponent = withStyles(SettingComponent, theme => ({
  container: { backgroundColor: theme["background-basic-color-1"] }
}));
export default ThemedSettingComponent;
export const SettingScreen = ThemedSettingComponent;
