/**
 * @format
 * @flow strict-local
 */

import React, { useCallback } from 'react';
import { ItemsHorizontal } from '@components/ItemsHorizontal';
import { COVID_TEST } from '@constants/dummy';
import Sizes from '@constants/sizes';
import { CovidTestSnippet } from '@components/snippet/CovidTestSnippet';

type CovidTestContainerProps = {};

export const CovidTestContainer = ({}: CovidTestContainerProps) => {
  const renderItemKey = useCallback((item) => item.id.toString(), []);
  const renderItem = useCallback(
    ({ item }) => <CovidTestSnippet title={item.title} price={item.price} tag={item.tag} />,
    []
  );
  return (
    <ItemsHorizontal
      header={{
        title: 'Book Antigen & PCR Test With Ease',
        description: 'Get your health checked and fulfill your traveling needs',
      }}
      items={COVID_TEST}
      keyExtractor={renderItemKey}
      renderItem={renderItem}
      contentStyle={{ paddingHorizontal: Sizes.large }}
    />
  );
};
