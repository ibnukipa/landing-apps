/**
 * @format
 * @flow strict-local
 */

import React, { Node } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { debounce } from 'lodash-es';

export type TouchableProps = {
  children: Node,
  onPress?: Function,
} & TouchableOpacityProps;

export const Touchable = ({ children, onPress, ...restProps }: TouchableProps) => (
  <TouchableOpacity
    disabled={!onPress}
    activeOpacity={onPress ? 0.75 : 1}
    onPress={
      onPress
        ? () => {
            if (onPress instanceof Function) {
              debounce(onPress, 300, { leading: true, trailing: false })();
            }
          }
        : null
    }
    {...restProps}
  >
    {children}
  </TouchableOpacity>
);
