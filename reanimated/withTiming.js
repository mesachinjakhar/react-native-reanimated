import React from 'react';
import Animated, {
  useAnimatedStyle,
  withTiming,
  useSharedValue,
} from 'react-native-reanimated';
import {Button} from 'react-native';
import {View} from 'react-native';

const WithTiming = () => {
  const offset = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {transform: [{translateX: offset.value}]};
  });

  return (
    <View>
      <Animated.View
        style={[
          {
            height: 100,
            width: 100,
            backgroundColor: 'blue',
          },
          animatedStyle,
        ]}></Animated.View>

      <Button
        title="Animated"
        onPress={() => {
          offset.value = withTiming('200%', {duration: 500});
        }}></Button>

      <Button
        title="Animated back"
        onPress={() => {
          offset.value = withTiming(0, {duration: 500});
        }}></Button>
    </View>
  );
};

export default WithTiming;
