import React, { Component } from "react";
import { Asset } from "expo";
import { StyleSheet, WebView, View } from "react-native";
import PropTypes from "prop-types";
class YoutubeVideo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={[styles.container]}>
        <WebView
          source={{
            uri: Asset.fromModule(require("./widget/index.html")).uri
          }}
          allowsInlineMediaPlayback={true}
          javaScriptEnabled={true}
          domStorageEnabled={true}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default YoutubeVideo;
