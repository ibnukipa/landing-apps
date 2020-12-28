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
import { CovidTestContainer } from "@components/container/CovidTestContainer";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const Dashboard = () => {
  const insets = useSafeAreaInsets();
  return (
    <Container hasHeader content={'light'}>
      <Header hasSearch />
      <ScrollView
        contentContainerStyle={{paddingBottom: insets.bottom}}
      >
        <UserProfile name={faker.name.findName()} description={faker.name.jobTitle()} />
        <MenuContainer />
        <MenuSecondaryContainer />
        <NoticeContainer />
        <CovidTestContainer />
      </ScrollView>
    </Container>
  );
};
