/**
 * @format
 * @flow strict-local
 */

import React, { useCallback } from 'react';
import { StyleSheet } from 'react-native';
import Sizes from '@constants/sizes';
import Colors from '@constants/colors';
import { Text } from '@components/Text';
import { Touchable } from '@components/Touchable';

type LabelButtonProps = {
  text: string,
  selected: boolean,
  onPress: Function,
};

export const LabelButton = ({ text, selected, onPress }: LabelButtonProps) => {
  const bgColor = useCallback(() => {
    return selected ? Colors.primary : Colors.gray;
  }, [selected]);
  const textColor = useCallback(() => {
    return selected ? Colors.white : Colors.primary;
  }, [selected]);

  return (
    <Touchable style={[styles.container, { backgroundColor: bgColor() }]} onPress={onPress}>
      <Text style={styles.text} medium color={textColor()} size={'small'}>
        {text}
      </Text>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    alignItems: 'center',
    paddingHorizontal: Sizes.smaller,
    paddingVertical: Sizes.extraSmall,
    marginRight: Sizes.small,
  },
  text: {
    marginHorizontal: Sizes.ultraSmall,
  },
});
