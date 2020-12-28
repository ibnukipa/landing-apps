/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, View } from 'react-native';
import Colors from '@constants/colors';
import Sizes from '@constants/sizes';
import { Text } from '@components/Text';
import { Divider } from '@components/Divider';
import { Icon } from '@components/Icon';

type ItemsHeaderProps = {
  title?: string,
  description?: string,
  hasMore?: boolean,
};

export const ItemsHeader = ({ title, description, hasMore }: ItemsHeaderProps) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerContent}>
        <Text numberOfLines={1} size={'extraLarge'} medium color={Colors.black}>
          {title}
        </Text>
        <Divider space={Sizes.extraSmall} />
        <Text numberOfLines={2} color={Colors.blueGray400}>
          {description}
        </Text>
      </View>
      {hasMore && <Icon color={Colors.primary} type={'material'} name={'arrow-forward-ios'} />}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Sizes.large,
    marginBottom: Sizes.small,
  },
  headerContent: {
    flex: 1,
    marginRight: Sizes.regular,
  },
});
