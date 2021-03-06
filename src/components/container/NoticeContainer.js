/**
 * @format
 * @flow strict-local
 */

import React, { useCallback } from 'react';
import { ItemsHorizontal } from '@components/ItemsHorizontal';
import { ItemOverSnippet } from '@components/snippet/ItemOverSnippet';
import { NOTICE } from '@constants/dummy';
import Sizes from '@constants/sizes';

type MenuContainerProps = {};

export const NoticeContainer = ({}: MenuContainerProps) => {
  const renderItemKey = useCallback((item) => item.id.toString(), []);
  const renderItem = useCallback(
    ({ item }) => <ItemOverSnippet title={item.title} position={item.position} align={item.align} />,
    []
  );
  return (
    <ItemsHorizontal
      header={{
        title: 'Important Notice',
        description: 'Travel information and refund/reschedule guide',
      }}
      items={NOTICE}
      keyExtractor={renderItemKey}
      renderItem={renderItem}
      contentStyle={{ paddingHorizontal: Sizes.large }}
    />
  );
};
