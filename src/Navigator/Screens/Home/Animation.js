import React from "react";
import { View, Text } from "react-native";
import { Button, Card, Title, Paragraph } from "react-native-paper";
import { Animated, Easing, StyleSheet } from "react-native";
export default class Animation extends React.Component {
  constructor(props) {
    super(props);
    // TIPS:
    // 不要把这些值setState
    this.scaleAnimation = new Animated.Value(0);
    this.cardScale = this.scaleAnimation.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [1, 1.1, 1]
    });
  }
  render() {
    return (
      <View styles={[styles.container]}>
        {/* Scale Animation */}
        <Animated.View style={{ transform: [{ scale: this.cardScale }] }}>
          <Card style={{ margin: 16 }}>
            <Card.Content>
              <Title>Card title</Title>
              <Paragraph>Card content</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
            <Card.Actions>
              <Button
                onPress={() => {
                  this.scaleAnimation.setValue(0);
                  Animated.timing(this.scaleAnimation, {
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
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {}
});
