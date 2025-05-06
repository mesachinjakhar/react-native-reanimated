import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {View, Button} from 'react-native';

const WithSpring = () => {
  const offset = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: offset.value}],
    };
  });

  return (
    <View>
      <Animated.View
        style={[
          {width: 150, height: 150, backgroundColor: 'red'},
          animatedStyle,
        ]}></Animated.View>
      <Button
        title="animate right"
        onPress={() => {
          offset.value = withSpring(200);
        }}></Button>
      <Button
        title="animate left"
        onPress={() => {
          offset.value = withSpring(0);
        }}></Button>
    </View>
  );
};

export default WithSpring;
