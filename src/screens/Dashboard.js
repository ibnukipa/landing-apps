/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import { ScrollView } from 'react-native';
import * as faker from 'faker';
import { Container } from '@components/Container';
import { Header } from '@components/Header';
import { UserProfile } from '@components/user/UserProfile';
import { MenuContainer } from '@components/container/MenuContainer';
import { MenuSecondaryContainer } from '@components/container/MenuSecondaryContainer';
import { NoticeContainer } from '@components/container/NoticeContainer';

export const Dashboard = () => {
  return (
    <Container hasHeader content={'light'}>
      <Header hasSearch />
      <ScrollView>
        <UserProfile name={faker.name.findName()} description={faker.name.jobTitle()} />
        <MenuContainer />
        <MenuSecondaryContainer />
        <NoticeContainer />
      </ScrollView>
    </Container>
  );
};
