/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, StyleSheet } from 'react-native';
import Spaces from '@constants/spaces';

export type DividerProps = {
  space?: number,
  horizontal?: boolean,
  style?: StyleSheet.Style,
};

export const Divider = ({ style, space = Spaces.regular, horizontal = false }: DividerProps) => (
  <View
    style={[{ marginVertical: space / 2 }, horizontal && { marginHorizontal: space / 2 }, style]}
  />
);
