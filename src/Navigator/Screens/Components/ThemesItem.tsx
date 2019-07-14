import React from "react";
import { StyleSheet, Image } from "react-native";
import {
  withStyles,
  ThemedComponentProps,
  ListItem,
  Text,
  Avatar
} from "react-native-ui-kitten";

import { imageApartment } from "~/assets/images";

export interface ThemesItemProps extends ThemedComponentProps {
  onPress?: () => void;
}
interface ThemesItemState {}
class ThemesItemComponent extends React.Component<
  ThemesItemProps,
  ThemesItemState
> {
  constructor(props: ThemesItemProps) {
    super(props);
  }
  componentDidMount() {
    // navigation params
  }
  render() {
    const { themedStyle, onPress } = this.props;
    return (
      <ListItem
        style={[styles.container, themedStyle.container]}
        onPress={() => {
          onPress && onPress();
          console.log("called");
        }}
      >
        <Image
          source={imageApartment.imageSource}
          style={[styles.themeAvatarContainer]}
        />
      </ListItem>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    overflow: "hidden",
    flexDirection: "row"
  },
  themeAvatarContainer: {
    width: "100%",
    height: 100
  }
});
const ThemedThemesItemComponent = withStyles(ThemesItemComponent, theme => ({
  container: { backgroundColor: theme["background-basic-color-1"] }
}));
export default ThemedThemesItemComponent;
export const ThemesItem = ThemedThemesItemComponent;
