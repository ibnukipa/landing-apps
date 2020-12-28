/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, StyleSheet } from 'react-native';
import Spaces from '@constants/spaces';

export type DividerProps = {
  space?: number,
  style?: StyleSheet.Style,
};

export const Divider = ({ style, space = Spaces.regular }: DividerProps) => (
  <View style={[{ marginVertical: space / 2 }, style]} />
);
