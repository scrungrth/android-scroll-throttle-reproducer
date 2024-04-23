/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {FlatList, Text, View} from 'react-native';

function App(): React.JSX.Element {
  return (
    <FlatList
      data={[1, 2, 3, 4]}
      onScrollEndDrag={() => console.log('onScrollEndDrag')}
      renderItem={() => (
        <View style={{height: 400, borderWidth: 1}}>
          <Text>
            - Scroll fast, notice no log message [Android only]
            {'\n\n'}- Scroll and hold (zero velocity), notice log message
            appears
          </Text>
        </View>
      )}
      scrollEventThrottle={250}
    />
  );
}

export default App;
