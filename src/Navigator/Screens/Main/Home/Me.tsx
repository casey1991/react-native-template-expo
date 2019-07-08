import React from "react";
import { View, AsyncStorage, Text } from "react-native";
export default class Me extends React.Component {
  _clearToken = async () => {
    await AsyncStorage.removeItem("token");
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Me Screen</Text>
      </View>
    );
  }
}
