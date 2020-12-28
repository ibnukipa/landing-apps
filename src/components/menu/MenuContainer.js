/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, StyleSheet } from 'react-native';
import Sizes from '@constants/sizes';
import { MenuItem } from '@components/menu/MenuItem';

type MenuContainerProps = {
  items: Array<{ id: string, name: string, icon: string, color: string, iconColor: string }>,
  countPerRow?: number,
};

export const MenuContainer = ({ items = [], countPerRow = 5 }: MenuContainerProps) => {
  return (
    <View style={styles.container}>
      {items.map((menu) => (
        <MenuItem
          key={menu.id}
          id={menu.id}
          name={menu.name}
          color={menu.color}
          icon={menu.icon}
          iconColor={menu.iconColor}
          countPerRow={countPerRow}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: Sizes.smaller,
  },
});
