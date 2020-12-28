/**
 * @format
 * @flow strict-local
 */

import React, { useCallback } from 'react';
import { MenuSecondarySnippet } from '@components/snippet/MenuSecondarySnippet';
import { ItemsHorizontal } from '@components/ItemsHorizontal';
import { SUB_MENU } from '@constants/dummy';

type MenuContainerProps = {};

export const MenuSecondaryContainer = ({ items = [] }: MenuContainerProps) => {
  const renderItemKey = useCallback((item) => item.id.toString(), []);
  const renderItem = useCallback(
    ({ item }) => <MenuSecondarySnippet icon={item.icon} name={item.name} />,
    []
  );
  return <ItemsHorizontal items={SUB_MENU} keyExtractor={renderItemKey} renderItem={renderItem} />;
};
