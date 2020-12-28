/**
 * @format
 * @flow strict-local
 */

import React, { Node } from 'react';
import { StatusBar, View, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import KeyboardAware from '@components/KeyboardAware';
import Colors from '@constants/colors';

type ContainerProps = {
  children: Node,
  hasHeader?: boolean,
};

export const Container = ({ children, hasHeader }: ContainerProps) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, !hasHeader && { marginTop: insets.top }]}>
      <KeyboardAware>
        <StatusBar translucent barStyle={'light-content'} backgroundColor={Colors.blue} />
        {children}
      </KeyboardAware>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
