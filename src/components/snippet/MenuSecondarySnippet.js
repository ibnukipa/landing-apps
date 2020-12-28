/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet } from 'react-native';
import { Icon } from '@components/Icon';
import Colors from '@constants/colors';
import { Text } from '@components/Text';
import Sizes from '@constants/sizes';
import { Touchable } from '@components/Touchable';

type MenuSecondarySnippetProps = {
  icon: string,
  name: string,
};

export const MenuSecondarySnippet = ({ name, icon }: MenuSecondarySnippetProps) => {
  return (
    <Touchable onPress={() => {}} style={[styles.container]}>
      <Icon name={icon} color={Colors.blueGray700} />
      <Text size={'small'} light color={Colors.black} centered>
        {name}
      </Text>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 80,
    alignItems: 'center',
    marginVertical: Sizes.small,
  },
});
