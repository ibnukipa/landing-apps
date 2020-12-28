/**
 * @format
 * @flow strict-local
 */

import React, { Node } from 'react';
import { Text as RNText, StyleSheet, TextProps as RNTextProps } from 'react-native';
import type { SizeTypes } from '@constants/sizes';
import Sizes from '@constants/sizes';
import Colors from '@constants/colors';

export type TextProps = {
  children: Node,
  style?: StyleSheet.Style,
  color?: string,
  italic?: boolean,
  centered?: boolean,
  underline?: boolean,
  lineThrough?: boolean,
  lighter?: boolean,
  light?: boolean,
  medium?: boolean,
  bold?: boolean,
  bolder?: boolean,
  size?: SizeTypes,
  align?: string,
} & RNTextProps;

export const Text = ({
  onPress,
  style,
  color = Colors.blueGray600,
  italic,
  centered,
  underline,
  lineThrough,
  lighter,
  light,
  medium,
  bold,
  bolder,
  size = 'regular',
  align = 'left',
  children,
  ...restProps
}: TextProps) => {
  return (
    <RNText
      onPress={onPress}
      style={[
        styles.text,
        color && { color },
        align && {
          textAlign: align,
        },
        italic && styles.italic,
        centered && styles.center,
        underline && styles.underline,
        lineThrough && styles.lineThrough,
        lighter && styles.lighter,
        light && styles.light,
        medium && styles.medium,
        bold && styles.bold,
        bolder && styles.bolder,
        size && {
          fontSize: Sizes[size],
        },
        style,
      ]}
      {...restProps}
      allowFontScaling={false}
    >
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Roboto',
  },
  lighter: {
    fontFamily: 'Roboto-Thin',
  },
  light: {
    fontFamily: 'Roboto-Light',
  },
  medium: {
    fontFamily: 'Roboto-Medium',
  },
  bold: {
    fontFamily: 'Roboto-Bold',
  },
  bolder: {
    fontFamily: 'Roboto-Black',
  },
  italic: {
    fontStyle: 'italic',
  },
  underline: {
    textDecorationLine: 'underline',
  },
  lineThrough: {
    textDecorationLine: 'line-through',
  },
  center: {
    textAlign: 'center',
  },
});
