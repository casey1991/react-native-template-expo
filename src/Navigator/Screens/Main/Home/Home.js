import React from "react";
import { View, Text } from "react-native";
import { Notes } from "~/Modules/Note/index";
export default class Home extends React.Component {
  render() {
    return (
      <View>
        <Notes />
      </View>
    );
  }
}
