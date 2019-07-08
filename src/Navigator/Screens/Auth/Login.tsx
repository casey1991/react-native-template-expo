import React from "react";
import { View } from "react-native";
import { IconButton, Button } from "react-native-paper";
import Toolbar from "~/Components/Toolbar";
import { CreateToken } from "~/Modules/Auth";
import { navigate, Constants } from "~/Libs/NavigationService";
export interface LoginScreenProps {}
interface LoginScreenState {}
class LoginScreenComponent extends React.Component<
  LoginScreenProps,
  LoginScreenState
> {
  constructor(props: LoginScreenProps) {
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
            navigate(Constants.MAIN_STACK);
          }}
        />
      </Toolbar>
    );
  };
  _jumpToForgotScreen = () => {
    navigate(Constants.FORGOT);
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        {this._renderToolbar()}
        <CreateToken />
        <Button onPress={this._jumpToForgotScreen}>Forgot</Button>
      </View>
    );
  }
}

export default LoginScreenComponent;
export const LoginScreen = LoginScreenComponent;
