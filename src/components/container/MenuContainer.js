/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, StyleSheet } from 'react-native';
import Sizes from '@constants/sizes';
import { MenuSnippet } from '@components/snippet/MenuSnippet';
import { take } from 'lodash-es';
import { MAIN_MENU } from '@constants/dummy';
import Colors from '@constants/colors';

const CURRENT_MENU = take(MAIN_MENU, 9);
CURRENT_MENU.push({
  id: 10,
  name: 'All Products',
  icon: 'apps',
  color: Colors.gray,
  iconColor: Colors.black,
});

type MenuContainerProps = {
  countPerRow?: number,
};

export const MenuContainer = ({ countPerRow = 5 }: MenuContainerProps) => {
  return (
    <View style={styles.container}>
      {CURRENT_MENU.map((menu) => (
        <MenuSnippet
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
