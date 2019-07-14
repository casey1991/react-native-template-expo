import React from "react";
import { View, StyleSheet } from "react-native";
import {
  withStyles,
  ThemedComponentProps,
  ListItem,
  Toggle
} from "react-native-ui-kitten";
import { NavigationScreenProp, NavigationRoute } from "react-navigation";
import { ThemeContext, Constants } from "~/Libs/Themes";

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
      <ThemeContext.Consumer>
        {({ toggleThemeMode, currentTheme }) => {
          return (
            <View style={[styles.container, themedStyle.container]}>
              <ListItem
                disabled
                title="Dark theme"
                accessory={() => (
                  <Toggle
                    checked={currentTheme.theme === Constants.themes.DARK}
                    onChange={checked => {
                      if (checked) {
                        toggleThemeMode(Constants.themes.DARK);
                      } else {
                        toggleThemeMode(Constants.themes.LIGHT);
                      }
                    }}
                  />
                )}
              />
            </View>
          );
        }}
      </ThemeContext.Consumer>
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
