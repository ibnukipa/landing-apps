/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Text } from '@components/Text';
import Colors from '@constants/colors';
import { StyleSheet, View } from 'react-native';
import Sizes from '@constants/sizes';

type PriceTagProps = {
  value: string | number,
};
export const PriceTag = ({ value }: PriceTagProps) => {
  return (
    <View style={styles.priceTag}>
      <Text color={Colors.white} medium>
        {value}
      </Text>
      <View style={styles.priceTagBorder} />
    </View>
  );
};

const styles = StyleSheet.create({
  priceTag: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    flexDirection: 'row',
    height: 25,
    alignItems: 'center',
    backgroundColor: Colors.deepOrange,
    paddingHorizontal: Sizes.extraSmall,
  },
  priceTagBorder: {
    position: 'absolute',
    left: -Sizes.small,
    bottom: 0,
    width: 0,
    height: 0,
    borderRightWidth: 10,
    borderRightColor: Colors.deepOrange,
    borderLeftWidth: 10,
    borderLeftColor: Colors.transparent,
    borderTopWidth: 25 / 2,
    borderTopColor: Colors.deepOrange,
    borderBottomWidth: 25 / 2,
    borderBottomColor: Colors.deepOrange,
  },
});
