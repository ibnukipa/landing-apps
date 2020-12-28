/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import { ScrollView } from 'react-native';
import { Container } from '@components/Container';
import { Header } from '@components/Header';
import { Profile } from '@components/user/Profile';

export const Dashboard = () => {
  return (
    <Container hasHeader content={'light'}>
      <Header hasSearch />
      <ScrollView>
        <Profile name={'Ibnu Prayogi'} description={'Software Engineer'} />
      </ScrollView>
    </Container>
  );
};
