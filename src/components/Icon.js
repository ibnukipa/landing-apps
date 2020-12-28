/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import type { SizeTypes } from '@constants/sizes';
import Sizes from '@constants/sizes';

import { Touchable } from '@components/Touchable';

const TYPES = {
  ion: Ionicons,
  material: MaterialIcons,
};

export type IconProps = {
  name?: string,
  onPress?: Function,
  size?: SizeTypes,
  color?: string,
  type?: $Keys<typeof TYPES>,
};

export const Icon = ({
  name = 'contrast',
  size = 'extraSmall',
  type = 'ion',
  onPress,
  ...restProps
}: IconProps) => {
  const Component = TYPES[type];
  return (
    <Touchable onPress={onPress}>
      <Component {...restProps} name={name} size={Sizes[size] * 2} />
    </Touchable>
  );
};
