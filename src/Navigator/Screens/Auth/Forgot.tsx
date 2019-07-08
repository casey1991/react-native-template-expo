import React from "react";
import { View } from "react-native";
import { IconButton } from "react-native-paper";
import Toolbar from "~/Components/Toolbar";
import { goBack } from "~/Libs/NavigationService";

export interface ForgotScreenProps {}
export interface ForgotScreenState {}
class ForgotScreenComponent extends React.Component<
  ForgotScreenProps,
  ForgotScreenState
> {
  constructor(props: ForgotScreenProps) {
    super(props);
    this.state = {
      email: null,
      password: null
    };
  }
  _renderToolbar = () => {
    return (
      <Toolbar>
        <IconButton
          icon="close"
          onPress={() => {
            goBack();
          }}
        />
      </Toolbar>
    );
  };
  render() {
    return <View style={{ flex: 1 }}>{this._renderToolbar()}</View>;
  }
}
export default ForgotScreenComponent;
export const ForgotScreen = ForgotScreenComponent;
