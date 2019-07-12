import React from "react";
import { View, StyleSheet } from "react-native";
import { withStyles, ThemedComponentProps } from "react-native-ui-kitten";
import { NavigationScreenProp, NavigationRoute } from "react-navigation";
import { MeHeader } from "../Components";
import { navigate, Constants } from "~/Libs/NavigationService";

export interface MeProps extends ThemedComponentProps {
  navigation: NavigationScreenProp<NavigationRoute<any>>;
}
class MeComponent extends React.Component<MeProps> {
  componentDidMount() {
    // navigation params
    const { navigation } = this.props;
    navigation.setParams({ onSettingPress: this._onSettingPress });
  }
  _onSettingPress = () => {
    navigate(Constants.Stacks.SETTING_STACK);
  };
  render() {
    const { themedStyle } = this.props;
    return (
      <View style={[styles.container, themedStyle.container]}>
        <MeHeader />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
const ThemedMeComponent = withStyles(MeComponent, theme => ({
  container: { backgroundColor: theme["background-basic-color-1"] }
}));
export default ThemedMeComponent;
export const MeScreen = ThemedMeComponent;
