/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import Text from '@components/Text';

const App: () => React$Node = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text lighter>Regular</Text>
        <Text light>Regular</Text>
        <Text>Regular</Text>
        <Text medium>Regular</Text>
        <Text bold>Regular</Text>
        <Text bolder>Regular</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
