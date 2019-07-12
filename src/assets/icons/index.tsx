import { ImageStyle, StyleProp } from "react-native";
import { Icon, IconElement, IconSource } from "./icon.component";

export const ActivityOutlineIcon = (
  style: StyleProp<ImageStyle>
): IconElement => {
  const source: IconSource = {
    imageSource: require("./pure/activity-outline.png")
  };

  return Icon(source, style);
};
