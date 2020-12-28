/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '@components/Text';
import { Container } from '@components/Container';
import Colors from '@constants/colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type HeaderProps = {
  backgroundColor?: string,
};

const Header = ({ backgroundColor = Colors.blue }: HeaderProps) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[headerStyles.container, { backgroundColor, paddingTop: insets.top }]}>
      <Text color={Colors.white}>Search Bar</Text>
    </View>
  );
};

export const Dashboard = () => {
  return (
    <Container hasHeader>
      <Header />
      <Text>Dashboard</Text>
    </Container>
  );
};

const headerStyles = StyleSheet.create({
  container: {},
});
