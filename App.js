/**
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RNBootSplash from 'react-native-bootsplash';

import { Dashboard } from '@screens/Dashboard';

const App: () => React$Node = () => {
  useEffect(() => {
    RNBootSplash.hide({ duration: 250, fade: true });
  }, []);
  return (
    <SafeAreaProvider>
      <Dashboard />
    </SafeAreaProvider>
  );
};

export default App;
