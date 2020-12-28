/**
 * @format
 * @flow strict-local
 */

import React, { useCallback } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import Sizes from '@constants/sizes';
import { Divider } from '@components/Divider';
import { ItemsHeader } from '@components/ItemsHeader';
import { LabelButton } from '@components/LabelButton';

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
  onChangeSelector?: Function,
  selectors?: Array,
  selectedKey?: string,
};

export const ItemsHorizontal = ({
  items,
  renderItem,
  keyExtractor,
  header,
  onChangeSelector,
  selectors,
  selectedKey,
  contentStyle,
}: ItemsVerticalProps) => {
  const renderItemSelector = useCallback(
    ({ item }) => {
      return (
        <LabelButton
          text={item}
          selected={item === selectedKey}
          onPress={() => onChangeSelector(item)}
        />
      );
    },
    [selectedKey, onChangeSelector]
  );
  return (
    <View style={styles.container}>
      {header && <ItemsHeader {...header} />}
      <FlatList
        data={selectors}
        renderItem={renderItemSelector}
        horizontal
        contentContainerStyle={contentStyle}
      />
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
