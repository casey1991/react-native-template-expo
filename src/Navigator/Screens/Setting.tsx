import React from "react";
import { View, StyleSheet } from "react-native";
import {
  withStyles,
  ThemedComponentProps,
  ListItem,
  Toggle,
  Button
} from "react-native-ui-kitten";
import { NavigationScreenProp, NavigationRoute } from "react-navigation";
import { ThemeContext, Constants } from "~/Libs/Themes";
import { ArrowLeftIcon, ArrowRightIcon } from "~/assets/icons";
import {
  navigate,
  Constants as NavigationServiceConstants
} from "~/Libs/NavigationService";

export interface SettingProps extends ThemedComponentProps {
  navigation: NavigationScreenProp<NavigationRoute<any>>;
}
interface SettingState {}
class SettingComponent extends React.Component<SettingProps, SettingState> {
  constructor(props: SettingProps) {
    super(props);
  }
  componentDidMount() {
    // navigation params
  }
  render() {
    const { themedStyle } = this.props;
    return (
      <View style={[styles.container, themedStyle.container]}>
        <ListItem
          title="Themes"
          accessory={() => ArrowRightIcon(styles.iconStyles)}
          onPress={() => {
            navigate(NavigationServiceConstants.Screens.THEMES);
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  iconStyles: {
    width: 24,
    height: 24
  }
});
const ThemedSettingComponent = withStyles(SettingComponent, theme => ({
  container: { backgroundColor: theme["background-basic-color-1"] }
}));
export default ThemedSettingComponent;
export const SettingScreen = ThemedSettingComponent;
