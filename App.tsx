import React from 'react';
import WithTiming from './reanimated/WithTiming';
import WithSpring from './reanimated/WithSpring';
import {View} from 'react-native';

function App(): React.JSX.Element {
  return (
    <View>
      <WithTiming />
      <WithSpring />
    </View>
  );
}

export default App;
