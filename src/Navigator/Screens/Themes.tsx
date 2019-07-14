import React from "react";
import { View, StyleSheet } from "react-native";
import {
  withStyles,
  ThemedComponentProps,
  ListItem,
  Toggle,
  List
} from "react-native-ui-kitten";
import { NavigationScreenProp, NavigationRoute } from "react-navigation";
import { ThemeContext, Constants, ThemeType } from "~/Libs/Themes";
import { ThemesItem } from "./Components";

export interface ThemesProps extends ThemedComponentProps {
  navigation: NavigationScreenProp<NavigationRoute<any>>;
}
interface ThemesState {
  themes: ThemeType[];
}
class ThemesComponent extends React.Component<ThemesProps, ThemesState> {
  private _toggleThemeMode: (mode: string) => void;
  private _currentTheme: ThemeType;
  private _toggleTheme: (theme: ThemeType) => void;
  constructor(props: ThemesProps) {
    super(props);
    this.state = {
      themes: [
        { theme: Constants.themes.LIGHT, mapping: Constants.mapping.NORMAL },
        { theme: Constants.themes.LIGHT, mapping: Constants.mapping.MAID }
      ]
    };
    this._toggleThemeMode = (mode: string) => {};
    this._toggleTheme = (theme: ThemeType, mode?: string | undefined) => {};
    this._currentTheme = {
      mapping: Constants.mapping.NORMAL,
      theme: Constants.themes.LIGHT
    };
  }
  componentDidMount() {}
  _renderListHeader = () => {
    return (
      <ListItem
        style={{ marginVertical: 8 }}
        disabled
        title="Dark theme"
        accessory={() => (
          <Toggle
            checked={this._currentTheme.theme === Constants.themes.DARK}
            onChange={checked => {
              if (checked) {
                this._toggleThemeMode(Constants.themes.DARK);
              } else {
                this._toggleThemeMode(Constants.themes.LIGHT);
              }
            }}
          />
        )}
      />
    );
  };
  _renderItem = ({ item }: { item: ThemeType }) => {
    return (
      <ThemesItem
        onPress={() => {
          this._toggleTheme(item);
        }}
      />
    );
  };
  render() {
    const { themedStyle } = this.props;
    const { themes } = this.state;
    return (
      <ThemeContext.Consumer>
        {({ toggleThemeMode, currentTheme, toggleTheme }) => {
          this._toggleThemeMode = toggleThemeMode;
          this._currentTheme = currentTheme;
          this._toggleTheme = toggleTheme;
          return (
            <View style={[styles.container, themedStyle.container]}>
              <List
                ListHeaderComponent={this._renderListHeader}
                data={themes}
                renderItem={this._renderItem}
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
const ThemedThemesComponent = withStyles(ThemesComponent, theme => ({
  container: { backgroundColor: theme["background-basic-color-1"] }
}));
export default ThemedThemesComponent;
export const ThemesScreen = ThemedThemesComponent;
