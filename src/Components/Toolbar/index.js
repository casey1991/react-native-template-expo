import React from "react";
import { SafeAreaView } from "react-navigation";
import { Appbar } from "react-native-paper";
class Toolbar extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <SafeAreaView>
        <Appbar style={{ backgroundColor: "transparent" }}>{children}</Appbar>
      </SafeAreaView>
    );
  }
}
export default Toolbar;
