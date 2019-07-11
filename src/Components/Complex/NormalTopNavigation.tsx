import React, { Component } from "react";
import { SafeAreaView, SafeAreaViewProps } from "react-navigation";
import {
  TopNavigation,
  TopNavigationProps,
  withStyles,
  ThemedComponentProps
} from "react-native-ui-kitten";
export interface NormalTopNavigationProps
  extends TopNavigationProps,
    SafeAreaViewProps,
    ThemedComponentProps {}
interface NormalTopNavigationState
  extends TopNavigationProps,
    SafeAreaViewProps {}
class NormalTopNavigationComponent extends Component<
  NormalTopNavigationProps,
  NormalTopNavigationState
> {
  render() {
    const { forceInset, children, themedStyle, theme, ...rest } = this.props;
    return (
      <SafeAreaView style={[themedStyle.container]} forceInset={forceInset}>
        <TopNavigation {...rest} />
      </SafeAreaView>
    );
  }
}

const ThemedNormalTopNavigationComponent = withStyles(
  NormalTopNavigationComponent,
  theme => ({
    container: {
      backgroundColor: theme["background-basic-color-1"]
    }
  })
);
export default ThemedNormalTopNavigationComponent;
export const NormalTopNavigation = ThemedNormalTopNavigationComponent;
