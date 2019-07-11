import React from "react";
import { View, StyleSheet } from "react-native";
import { withStyles, ThemedComponentProps } from "react-native-ui-kitten";

export interface SearchProps extends ThemedComponentProps {}
class SearchComponent extends React.Component<SearchProps> {
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
const ThemedSearchComponent = withStyles(SearchComponent, theme => ({
  container: { backgroundColor: theme["background-basic-color-1"] }
}));
export default ThemedSearchComponent;
export const SearchScreen = ThemedSearchComponent;
