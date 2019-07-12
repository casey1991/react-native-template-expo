import React from "react";
import { View, StyleSheet } from "react-native";
import {
  withStyles,
  ThemedComponentProps,
  ListItem,
  Toggle
} from "react-native-ui-kitten";
import { NavigationScreenProp, NavigationRoute } from "react-navigation";
import { ThemeContext } from "~/Libs/Themes";

export interface SettingProps extends ThemedComponentProps {
  navigation: NavigationScreenProp<NavigationRoute<any>>;
}
interface SettingState {
  nightMode: boolean;
}
class SettingComponent extends React.Component<SettingProps, SettingState> {
  constructor(props: SettingProps) {
    super(props);
    this.state = {
      nightMode: false
    };
  }
  componentDidMount() {
    // navigation params
  }
  render() {
    const { themedStyle } = this.props;
    const { nightMode } = this.state;
    return (
      <ThemeContext.Consumer>
        {({ toggleTheme }) => {
          return (
            <View style={[styles.container, themedStyle.container]}>
              <ListItem
                disabled
                title="Dark theme"
                accessory={() => (
                  <Toggle
                    checked={nightMode}
                    onChange={checked => {
                      this.setState({ nightMode: checked }, () => {
                        if (checked) {
                          toggleTheme("Normal Dark");
                        } else {
                          toggleTheme("Normal Light");
                        }
                      });
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
