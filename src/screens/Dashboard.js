/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import { ScrollView } from 'react-native';
import { take } from 'lodash-es';
import * as faker from 'faker';
import { Container } from '@components/Container';
import { Header } from '@components/Header';
import { UserProfile } from '@components/user/UserProfile';
import { MenuContainer } from '@components/menu/MenuContainer';
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

export const Dashboard = () => {
  return (
    <Container hasHeader content={'light'}>
      <Header hasSearch />
      <ScrollView>
        <UserProfile name={faker.name.findName()} description={faker.name.jobTitle()} />
        <MenuContainer items={CURRENT_MENU} />
      </ScrollView>
    </Container>
  );
};
