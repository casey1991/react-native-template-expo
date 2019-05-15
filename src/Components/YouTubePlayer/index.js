import React, { Component } from "react";
import { Asset } from "expo";
import { StyleSheet, WebView, View } from "react-native";
import PropTypes from "prop-types";
class YoutubeVideo extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired
  };
  static defaultProps = {
    id: null
  };
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
          injectedJavaScript={`var tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player("player", {
          height: "100%",
          width: "100%",
          videoId: "M7lc1UVf-VE",
          playerVars: {
            playsinline: 1,
            rel: 0,
            iv_load_policy: 3,
            controls: 2
          },
          events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange
          }
        });
      }
      function onPlayerReady(event) {
        event.target.playVideo();
      }
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }
      `}
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
