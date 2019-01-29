import React from "react";
import { View, Text } from "react-native";
import { navigate, Constants, isAuthed } from "~/Libs/NavigationService";
export default class Message extends React.Component {
  static navigationOptions = {
    tabBarOnPress: ({ navigation, defaultHandler }) => {
      isAuthed(Constants.MESSAGE, (error, pass) => {
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
        <Text>Message Screen</Text>
      </View>
    );
  }
}
