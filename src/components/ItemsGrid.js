/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import Sizes from '@constants/sizes';
import { ItemsHeader } from '@components/ItemsHeader';

type ItemsGridProps = {
  items: Array<{ title: string, description: string }>,
  keyExtractor: Function,
  renderItem: Function,
  backgroundColor?: string,
  header?: {
    title: string,
    description: string,
    hasMore?: boolean,
  },
  contentStyle?: StyleSheet.style,
};

export const ItemsGrid = ({
  items,
  renderItem,
  backgroundColor,
  keyExtractor,
  header,
  contentStyle,
}: ItemsGridProps) => {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      {header && <ItemsHeader {...header} />}
      <FlatList
        numColumns={2}
        removeClippedSubviews={false}
        showsHorizontalScrollIndicator={false}
        data={items}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        onEndReachedThreshold={0.9}
        contentContainerStyle={contentStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: Sizes.regular,
  },
});
