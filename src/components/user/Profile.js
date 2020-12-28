/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, StyleSheet } from 'react-native';
import Sizes from '@constants/sizes';
import { Text } from '@components/Text';
import Colors from '@constants/colors';
import { Icon } from '@components/Icon';
import { Label } from '@components/Label';

export type ProfileProps = {
  name: string,
  description: string,
};

export const Profile = ({ name, description }: ProfileProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <Icon name={'ios-person-circle'} size={'extraLarge'} color={Colors.blueGray400} />
        <View style={styles.userContent}>
          <Text numberOfLines={1} bold size={'large'}>
            {name}
          </Text>
          <Text numberOfLines={1} size={'small'} color={Colors.blueGray400}>
            {description}
          </Text>
        </View>
      </View>
      <View style={styles.metadata}>
        <Label isLight text={'52.700 Points'} />
        <Label isLight iconName={'attach-money'} iconType={'material'} text={'Rp. 100rb'} />
        <Label isLight iconName={'wallet'} text={'PayLater'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.grayDimmed,
    padding: Sizes.regular,
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userContent: {
    flex: 1,
    marginLeft: Sizes.ultraSmall,
  },
  metadata: {
    marginTop: Sizes.smaller,
    flexDirection: 'row',
  },
});
