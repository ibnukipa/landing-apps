/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, View } from 'react-native';
import Colors from '@constants/colors';
import { Text } from '@components/Text';
import Sizes from '@constants/sizes';
import { Touchable } from '@components/Touchable';

type NoticeSnippetProps = {
  title: string,
  position: string,
  align: string,
};

export const ItemOverSnippet = ({
  title,
  position = 'start',
  align = 'left',
}: NoticeSnippetProps) => {
  return (
    <Touchable
      onPress={() => {}}
      style={[styles.container, { justifyContent: `flex-${position}` }]}
    >
      <Text bold align={align} light color={Colors.black}>
        {title}
      </Text>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    marginVertical: Sizes.small,
    backgroundColor: Colors.amber,
    borderRadius: Sizes.extraSmall,
    padding: Sizes.extraSmall,
  },
});
