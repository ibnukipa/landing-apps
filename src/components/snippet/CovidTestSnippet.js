/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, View } from 'react-native';
import Colors from '@constants/colors';
import { Text } from '@components/Text';
import Sizes from '@constants/sizes';
import { Icon } from '@components/Icon';
import { Divider } from '@components/Divider';
import Spaces from '@constants/spaces';

type CovidTestSnippetProps = {
  title: string,
  tag: string,
  price: string,
};

export const CovidTestSnippet = ({ title, tag, price }: CovidTestSnippetProps) => {
  return (
    <View style={styles.container}>
      <View style={[styles.image]}>
        <Icon color={Colors.blueGray} />
      </View>
      {title && (
        <>
          <Text numberOfLines={2} bold size={'large'}>
            {title}
          </Text>
          <Divider space={Spaces.extraSmall} />
        </>
      )}
      {tag && (
        <>
          <Text numberOfLines={1} size={'small'}>
            {tag}
          </Text>
          <Divider space={Spaces.extraSmall} />
        </>
      )}
      {price && (
        <Text numberOfLines={2} bold size={'large'} color={Colors.orange900}>
          {price}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 150,
  },
  image: {
    width: 150,
    height: 150,
    marginVertical: Sizes.small,
    backgroundColor: Colors.gray,
    borderRadius: Sizes.extraSmall,
    padding: Sizes.extraSmall,
  },
});
