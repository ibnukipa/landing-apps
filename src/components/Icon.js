/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import VIcon from 'react-native-vector-icons/Ionicons';
import type { SizeTypes } from '@constants/sizes';
import Sizes from '@constants/sizes';

import { Touchable } from '@components/Touchable';

export type IconProps = {
  name?: string,
  onPress?: Function,
  size?: SizeTypes,
};

export const Icon = ({ name = 'contrast-outline', size = 'regular', ...props }: IconProps) => {
  return (
    <Touchable onPress={props.onPress}>
      <VIcon {...props} name={name} size={Sizes[size]} />
    </Touchable>
  );
};
