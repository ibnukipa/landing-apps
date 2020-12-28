/**
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { Platform, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';

import { Text } from '@components/Text';
import { Container } from '@components/Container';
import Colors from '@constants/colors';
import { TextInput } from '@components/TextInput';
import Sizes from '@constants/sizes';

type HeaderProps = {
  title?: string,
  hasSearch?: boolean,
};

const Header = ({ title, hasSearch }: HeaderProps) => {
  const insets = useSafeAreaInsets();
  const [keyword, setKeyword] = useState();
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0.9 }}
      colors={[Colors.gradientPrimary, Colors.gradientSecondary]}
      style={[
        headerStyles.container,
        { paddingTop: insets.top + Platform.select({ ios: 0, android: Sizes.small }) },
      ]}
    >
      {title &&
        (React.isValidElement(title) ? (
          title
        ) : (
          <Text size={'ultraLarge'} color={Colors.white} style={headerStyles.title}>
            {title}
          </Text>
        ))}
      {hasSearch && (
        <TextInput
          returnKeyType={'search'}
          iconPosition={'left'}
          iconName={'search'}
          style={headerStyles.searchInput}
          name={'keyword'}
          isDimmed
          isSpace={false}
          isClear
          placeholder={'Search'}
          onChange={(keyword) => setKeyword(keyword)}
          onClear={() => setKeyword('')}
          value={keyword}
        />
      )}
    </LinearGradient>
  );
};

export const Dashboard = () => {
  return (
    <Container hasHeader content={'light'}>
      <Header hasSearch />
      <Text>Dashboard</Text>
    </Container>
  );
};

const headerStyles = StyleSheet.create({
  container: {
    paddingHorizontal: Sizes.small,
    paddingBottom: Sizes.small,
  },
  title: {
    marginBottom: Sizes.small,
    ...Platform.select({
      ios: {
        marginTop: Sizes.small,
      },
    }),
  },
  searchInput: {
    color: Colors.white,
  },
});
