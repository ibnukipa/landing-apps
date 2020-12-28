/**
 * @format
 * @flow strict-local
 */

import React, { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import Sizes from '@constants/sizes';
import Colors from '@constants/colors';
import { Icon } from '@components/Icon';
import { Text } from '@components/Text';
import { Touchable } from "@components/Touchable";

type LabelProps = {
  text: string,
  iconName?: string,
  iconType?: string,
  isLight?: boolean,
};

export const Label = ({ text, iconName = 'contrast', iconType, isLight = false }: LabelProps) => {
  const bgColor = useCallback(() => {
    return isLight ? Colors.white : Colors.blueGray5050;
  }, [isLight]);
  const icColor = useCallback(() => {
    return isLight ? Colors.primary : Colors.blueGray;
  }, [isLight]);
  const textColor = useCallback(() => {
    return isLight ? Colors.blueGray300 : Colors.blueGray400;
  }, [isLight]);

  return (
    <Touchable style={[styles.container, { backgroundColor: bgColor() }]}>
      <Icon color={icColor()} name={iconName} type={iconType} />
      <Text style={styles.text} medium color={textColor()} size={'small'}>
        {text}
      </Text>
      <Icon type={'material'} color={Colors.blueGray} name={'arrow-right'} />
    </Touchable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: Sizes.extraSmall,
    paddingVertical: Sizes.ultraSmall,
    marginRight: Sizes.small,
  },
  text: {
    marginLeft: Sizes.ultraSmall,
    marginRight: Sizes.ultraSmall,
  },
});
