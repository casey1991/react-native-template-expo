import React from "react";
import { DangerZone, ScreenOrientation } from "expo";
import { View } from "react-native";
import {} from "lodash";
const { DeviceMotion } = DangerZone;
class DeviceMotionScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { deviceMotionData: {} };
    this._subscription = null;
  }
  componentDidMount = async () => {
    this._subscribe();
  };
  componentWillUnmount = async () => {
    this._unsubscribe();
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (
      prevState.deviceMotionData.orientation !==
      this.state.deviceMotionData.orientation
    ) {
      this._changeScreenOrientation(
        this._matchScreenOrientationConstants(
          this.state.deviceMotionData.orientation
        )
      );
    }
  };
  _listenForDeviceMotion = result => {
    this.setState({ deviceMotionData: result });
  };
  _subscribe = () => {
    this._subscription = DeviceMotion.addListener(this._listenForDeviceMotion);
  };
  _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  };
  _changeScreenOrientation = async orientation => {
    await ScreenOrientation.allowAsync(orientation);
  };
  _matchScreenOrientationConstants = deg => {
    let orientation = null;
    switch (deg) {
      case -90:
        orientation = ScreenOrientation.Orientation.LANDSCAPE_RIGHT;
        break;
      case 90:
        orientation = ScreenOrientation.Orientation.LANDSCAPE_LEFT;
        break;
      default:
        orientation = ScreenOrientation.Orientation.PORTRAIT;
    }
    return orientation;
  };
  render() {
    return <View style={{ width: 100, height: 50, backgroundColor: "#303" }} />;
  }
}
export default DeviceMotionScreen;
