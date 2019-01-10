import React from "react";
import { View } from "react-native";
import { Button, Card, Title, Paragraph, IconButton } from "react-native-paper";
import { Animated, Easing, StyleSheet } from "react-native";
export default class Animation extends React.Component {
  constructor(props) {
    super(props);
    // TIPS:
    // 不要把这些值setState
    this.scaleValue = new Animated.Value(0);
    this.cardScale = this.scaleValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [1, 1.1, 1]
    });
    this.rotateValue = new Animated.Value(0);
    this.fabRotate = this.rotateValue.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"]
    });
  }
  render() {
    return (
      <View style={[styles.container]}>
        {/* Scale Animation */}
        {/* TIPS: wrapper Animated 组件 */}
        <Animated.View style={{ transform: [{ scale: this.cardScale }] }}>
          <Card>
            <Card.Content>
              <Title>Card title</Title>
              <Paragraph>Card content</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
            <Card.Actions>
              <Button
                onPress={() => {
                  this.scaleValue.setValue(0);
                  Animated.timing(this.scaleValue, {
                    toValue: 1,
                    duration: 250,
                    easing: Easing.linear,
                    useNativeDriver: true //可以开启thread启动动画，不会导致js thread卡顿
                  }).start();
                }}
              >
                Start
              </Button>
            </Card.Actions>
          </Card>
        </Animated.View>
        {/* Rotate Animation */}
        <Animated.View
          style={{
            alignContent: "center",
            alignItems: "center",
            margin: 16,
            transform: [{ rotate: this.fabRotate }]
          }}
        >
          <IconButton
            icon="cached"
            onPress={() => {
              this.rotateValue.setValue(0);
              Animated.timing(this.rotateValue, {
                toValue: 1,
                duration: 700,
                easing: Easing.linear
              }).start();
            }}
          />
        </Animated.View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  }
});
