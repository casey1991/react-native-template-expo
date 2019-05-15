import React from "react";
import { View, StyleSheet } from "react-native";
// import { Notes } from "~/Modules/Note/index";
import { YouTubePlayer } from "~/Components";
export default class Home extends React.Component {
  render() {
    return (
      <View style={[styles.container]}>
        {/* <Notes /> */}
        <YouTubePlayer />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: { flex: 1 }
});
