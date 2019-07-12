import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Avatar } from "react-native-ui-kitten";
import { imageApartment } from "~/assets/images";

class MeHeaderComponent extends Component {
  render() {
    return (
      <View style={[styles.container]}>
        <Avatar source={imageApartment.imageSource} size="giant" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 8
  }
});
export default MeHeaderComponent;
export const MeHeader = MeHeaderComponent;
