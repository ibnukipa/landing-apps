/**
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import { Icon } from '@components/Icon';
import Colors from '@constants/colors';
import { Text } from '@components/Text';
import Sizes from '@constants/sizes';
import { Touchable } from '@components/Touchable';

type MenuSnippetProps = {
  id: string,
  color: string,
  icon: string,
  iconColor: string,
  name: string,
  countPerRow?: number,
};

export const MenuSnippet = ({
  id,
  color,
  icon,
  iconColor,
  name,
  countPerRow = 5,
}: MenuSnippetProps) => {
  const { width } = useWindowDimensions();
  const [itemDimension] = useState(width / countPerRow);
  const [iconDimension] = useState(width / countPerRow - Sizes.small * 3);
  return (
    <Touchable onPress={() => {}} style={[styles.container, { width: itemDimension }]}>
      <View style={styles.content}>
        <View
          style={[
            styles.iconContainer,
            { width: iconDimension, height: iconDimension, backgroundColor: color },
          ]}
        >
          <Icon name={icon} size={'small'} color={iconColor || Colors.white} />
        </View>
        <Text size={'small'} light color={Colors.black} centered>
          {name}
        </Text>
      </View>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: Sizes.smaller / 2,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Sizes.ultraSmall,
    backgroundColor: Colors.primary,
  },
});
