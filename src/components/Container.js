/**
 * @format
 * @flow strict-local
 */

import React, { Node } from 'react';
import { StatusBar, View, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Colors from '@constants/colors';

type ContainerProps = {
  children: Node,
  hasHeader?: boolean,
  content?: 'light' | 'dark',
};

export const Container = ({ children, hasHeader = false, content = 'dark' }: ContainerProps) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, !hasHeader && { marginTop: insets.top }]}>
      <StatusBar
        translucent
        barStyle={`${content}-content`}
        backgroundColor={hasHeader ? Colors.transparent : Colors.white}
      />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
