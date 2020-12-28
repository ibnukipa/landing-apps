/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import Sizes from '@constants/sizes';
import { Divider } from '@components/Divider';
import { ItemsHeader } from '@components/ItemsHeader';

type ItemsVerticalProps = {
  items: Array<{ title: string, description: string }>,
  keyExtractor: Function,
  renderItem: Function,
  contentStyle?: StyleSheet.style,
  header?: {
    title: string,
    description: string,
    hasMore?: boolean,
  },
};

export const ItemsHorizontal = ({
  items,
  renderItem,
  keyExtractor,
  header,
  contentStyle,
}: ItemsVerticalProps) => {
  return (
    <View style={styles.container}>
      {header && <ItemsHeader {...header} />}
      <FlatList
        horizontal
        removeClippedSubviews={false}
        showsHorizontalScrollIndicator={false}
        data={items}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        onEndReachedThreshold={0.9}
        contentContainerStyle={contentStyle}
        ItemSeparatorComponent={() => <Divider horizontal />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: Sizes.regular,
  },
});
