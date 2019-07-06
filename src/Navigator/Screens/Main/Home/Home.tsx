import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import i18n, { Constants } from "~/Libs/i18n";
// import { Notes } from "~/Modules/Note/index";
// import { YouTubePlayer } from "~/Components";
export default class Home extends React.Component {
  render() {
    return (
      <View style={[styles.container]}>
        {/* <Notes /> */}
        {/* <YouTubePlayer /> */}
        <TouchableOpacity
          onPress={() =>
            i18n.changeLanguage(
              i18n.language === Constants.LANGUAGE_EN_US
                ? Constants.LANGUAGE_ZH_CH
                : Constants.LANGUAGE_EN_US
            )
          }
        >
          <Text>Change</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center"
  }
});
