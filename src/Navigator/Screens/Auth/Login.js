import React from "react";
import { View, Text } from "react-native";
import { IconButton } from "react-native-paper";
import Toolbar from "../../../Components/Toolbar";
import { navigate, Constants } from "../../../Libs/NavigationService";
export default class Login extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Toolbar>
          <IconButton
            icon="close"
            onPress={() => {
              navigate(Constants.HOME_STACK);
            }}
          />
        </Toolbar>
        <Text>Login Screen</Text>
      </View>
    );
  }
}
