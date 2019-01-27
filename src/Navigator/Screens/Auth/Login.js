import React from "react";
import { View } from "react-native";
import { IconButton } from "react-native-paper";
import Toolbar from "../../../Components/Toolbar";
import { CreateToken } from "../../../Modules/Auth";
import { navigate, Constants } from "../../../Libs/NavigationService";
export default class Login extends React.Component {
  constructor(props) {
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
            navigate(Constants.HOME_STACK);
          }}
        />
      </Toolbar>
    );
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        {this._renderToolbar()}
        <CreateToken />
      </View>
    );
  }
}
