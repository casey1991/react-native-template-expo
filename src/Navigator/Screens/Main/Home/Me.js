import React from "react";
import { View } from "react-native";
import { IconButton } from "react-native-paper";
import {
  navigate,
  Constants,
  isAuthed
} from "../../../../Libs/NavigationService";
import Toolbar from "../../../../Components/Toolbar";
export default class Me extends React.Component {
  static navigationOptions = {
    tabBarOnPress: ({ navigation, defaultHandler }) => {
      isAuthed(Constants.ME, (error, pass) => {
        if (pass) {
          defaultHandler();
        } else {
          navigate(Constants.LOGIN);
        }
      });
    }
  };
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
      </View>
    );
  }
}
