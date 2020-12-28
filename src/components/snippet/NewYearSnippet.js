/**
 * @format
 * @flow strict-local
 */

import React, { useCallback } from 'react';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import Colors from '@constants/colors';
import { Text } from '@components/Text';
import Sizes from '@constants/sizes';
import { Divider } from '@components/Divider';
import { Icon } from '@components/Icon';

type NewYearSnippetProps = {
  city: string,
  place: string,
  location: string,
};

export const NewYearSnippet = ({ city, place, location }: NewYearSnippetProps) => {
  const windowDimensions = useWindowDimensions();
  const snippetDimension = useCallback(() => {
    return (windowDimensions.width - Sizes.large * 3) / 2;
  }, [windowDimensions]);
  return (
    <View style={[styles.container, { width: snippetDimension(), height: snippetDimension() }]}>
      <View>
        <Text bold light size={'extraLarge'} color={Colors.white}>
          {city}
        </Text>
        <Divider space={Sizes.extraSmall} />
        <Text bold light color={Colors.white}>
          {place}
        </Text>
      </View>
      <View style={styles.metadata}>
        <Icon size={'extraSmall'} color={Colors.white} name="location-outline" />
        <Text size={'small'} medium color={Colors.white}>
          {location}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    borderRadius: Sizes.extraSmall,
    padding: Sizes.regular,
    margin: Sizes.large / 2,
    justifyContent: 'space-between',
  },
  metadata: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
