/**
 * @format
 * @flow strict-local
 */

import React, { useCallback, useEffect, useState } from 'react';
import { ItemsHorizontal } from '@components/ItemsHorizontal';
import { ACTIVITIES } from '@constants/dummy';
import Sizes from '@constants/sizes';
import { ItemPriceSnippet } from '@components/snippet/ItemPriceSnippet';
import { groupBy, keys, filter } from 'lodash-es';

type ActivitiesContainerProps = {};

export const ActivitiesContainer = ({}: ActivitiesContainerProps) => {
  const renderItemKey = useCallback((item) => item.id.toString(), []);
  const [selectedKey, setSelectedKey] = useState(null);
  const [selectors, setSelectors] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  useEffect(() => {
    const currentSelectors = keys(groupBy(ACTIVITIES, 'mainCategory'));
    setSelectedKey(currentSelectors[0]);
    setSelectors(currentSelectors);
  }, []);

  useEffect(() => {
    if (selectedKey) {
      setSelectedItems(filter(ACTIVITIES, ['mainCategory', selectedKey]));
    }
  }, [selectedKey]);

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
      onChangeSelector={(key) => setSelectedKey(key)}
      selectors={selectors}
      selectedKey={selectedKey}
      items={selectedItems}
      keyExtractor={renderItemKey}
      renderItem={renderItem}
      contentStyle={{ paddingHorizontal: Sizes.large }}
    />
  );
};
