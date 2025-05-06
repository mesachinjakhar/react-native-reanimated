import React from 'react';
import WithTiming from './reanimated/withTiming';
import {View} from 'react-native';

function App(): React.JSX.Element {
  return (
    <View>
      <WithTiming />
    </View>
  );
}

export default App;
