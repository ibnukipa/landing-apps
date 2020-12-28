/**
 * @format
 * @flow strict-local
 */

import React, { useCallback } from 'react';
import { ItemsHorizontal } from '@components/ItemsHorizontal';
import { MORE_POINTS } from '@constants/dummy';
import Sizes from '@constants/sizes';
import { ItemPriceSnippet } from '@components/snippet/ItemPriceSnippet';

type PointsContainerProps = {};

export const PointsContainer = ({}: PointsContainerProps) => {
  const renderItemKey = useCallback((item) => item.id.toString(), []);
  const renderItem = useCallback(
    ({ item }) => <ItemPriceSnippet title={item.title} price={item.price} tag={item.tag} />,
    []
  );
  return (
    <ItemsHorizontal
      header={{
        title: 'Get More with Traveloka Points',
        description: 'Redeem yorut Points For these spacial offers',
        hasMore: true,
      }}
      items={MORE_POINTS}
      keyExtractor={renderItemKey}
      renderItem={renderItem}
      contentStyle={{ paddingHorizontal: Sizes.large }}
    />
  );
};
