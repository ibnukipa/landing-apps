/**
 * @format
 * @flow strict-local
 */

import React, { useCallback } from 'react';
import { NEW_YEAR } from '@constants/dummy';
import { ItemsGrid } from '@components/ItemsGrid';
import { NewYearSnippet } from '@components/snippet/NewYearSnippet';
import Sizes from '@constants/sizes';
import Colors from '@constants/colors';

type NewYearContainerProps = {};

export const NewYearContainer = ({}: NewYearContainerProps) => {
  const renderItemKey = useCallback((item) => item.id.toString(), []);
  const renderItem = useCallback(
    ({ item }) => <NewYearSnippet city={item.city} place={item.place} location={item.location} />,
    []
  );
  return (
    <ItemsGrid
      header={{
        title: "Let's Ride into the New Year!",
        description:
          "See our road trip destination ideas to close your 2020. Hop in the car, let's go!",
      }}
      items={NEW_YEAR}
      keyExtractor={renderItemKey}
      renderItem={renderItem}
      contentStyle={{ paddingHorizontal: Sizes.large / 2 }}
      backgroundColor={Colors.gradientSecondaryDimmed}
    />
  );
};
