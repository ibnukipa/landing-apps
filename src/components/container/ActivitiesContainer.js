/**
 * @format
 * @flow strict-local
 */

import React, { useCallback } from 'react';
import { ItemsHorizontal } from '@components/ItemsHorizontal';
import { ACTIVITIES } from '@constants/dummy';
import Sizes from '@constants/sizes';
import { ItemPriceSnippet } from '@components/snippet/ItemPriceSnippet';

type ActivitiesContainerProps = {};

export const ActivitiesContainer = ({}: ActivitiesContainerProps) => {
  const renderItemKey = useCallback((item) => item.id.toString(), []);
  const renderItem = useCallback(
    ({ item }) => (
      <ItemPriceSnippet
        title={item.title}
        price={item.price}
        priceDiscount={item.priceDiscount}
        saved={item.saved}
      />
    ),
    []
  );
  return (
    <ItemsHorizontal
      header={{
        title: 'Start 2021 Fit and Fresh',
        description: 'Give yourself some love after a long year with these Xperiences',
        hasMore: true,
      }}
      items={ACTIVITIES}
      keyExtractor={renderItemKey}
      renderItem={renderItem}
      contentStyle={{ paddingHorizontal: Sizes.large }}
    />
  );
};
