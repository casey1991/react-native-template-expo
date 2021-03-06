import { ImageStyle, StyleProp } from "react-native";
import { Icon, IconElement, IconSource } from "./icon.component";

const ActivityOutline = (style: StyleProp<ImageStyle>): IconElement => {
  const source: IconSource = {
    imageSource: require("./pure/activity-outline.png")
  };

  return Icon(source, style);
};

const ArrowLeft = (style: StyleProp<ImageStyle>): IconElement => {
  const source: IconSource = {
    imageSource: require("./pure/arrow-left.png")
  };

  return Icon(source, style);
};
const Setting = (style: StyleProp<ImageStyle>): IconElement => {
  const source: IconSource = {
    imageSource: require("./pure/setting.png")
  };

  return Icon(source, style);
};
const ArrowRight = (style: StyleProp<ImageStyle>): IconElement => {
  const source: IconSource = {
    imageSource: require("./pure/arrow-right.png")
  };

  return Icon(source, style);
};

export const ActivityOutlineIcon = ActivityOutline;
export const ArrowLeftIcon = ArrowLeft;
export const ArrowRightIcon = ArrowRight;
export const SettingIcon = Setting;
