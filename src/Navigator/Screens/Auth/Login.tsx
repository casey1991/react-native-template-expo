import React from "react";
import { View } from "react-native";
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

  _jumpToForgotScreen = () => {};
  render() {
    return <View style={{ flex: 1 }}>{/*  */}</View>;
  }
}

export default LoginScreenComponent;
export const LoginScreen = LoginScreenComponent;
