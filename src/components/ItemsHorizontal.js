/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { Text } from '@components/Text';
import Sizes from '@constants/sizes';
import Colors from '@constants/colors';
import { Divider } from '@components/Divider';

type ItemsVerticalProps = {
  items: Array<{ title: string, description: string }>,
  keyExtractor: Function,
  renderItem: Function,
  contentStyle?: StyleSheet.style,
  header?: {
    title: string,
    description: string,
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
      {header && (
        <View style={styles.header}>
          <Text numberOfLines={1} size={'extraLarge'} medium color={Colors.black}>
            {header.title}
          </Text>
          <Text numberOfLines={2} color={Colors.blueGray400}>
            {header.description}
          </Text>
        </View>
      )}
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
    marginVertical: Sizes.regular,
  },
  header: {
    paddingHorizontal: Sizes.large,
  },
});
