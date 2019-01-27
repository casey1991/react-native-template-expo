import React from "react";
import { View, Text } from "react-native";
import { navigate, Constants, isAuthed } from "../../../Libs/NavigationService";
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
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Me Screen</Text>
      </View>
    );
  }
}
