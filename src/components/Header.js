/**
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { Platform, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '@constants/colors';
import Sizes from '@constants/sizes';
import { Text } from '@components/Text';
import { TextInput } from '@components/TextInput';

type HeaderProps = {
  title?: string,
  hasSearch?: boolean,
};

export const Header = ({ title, hasSearch }: HeaderProps) => {
  const insets = useSafeAreaInsets();
  const [keyword, setKeyword] = useState();
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0.9 }}
      colors={[Colors.gradientPrimary, Colors.gradientSecondary]}
      style={[
        styles.container,
        { paddingTop: insets.top + Platform.select({ ios: 0, android: Sizes.small }) },
      ]}
    >
      {title &&
        (React.isValidElement(title) ? (
          title
        ) : (
          <Text size={'ultraLarge'} color={Colors.white} style={styles.title}>
            {title}
          </Text>
        ))}
      {hasSearch && (
        <TextInput
          returnKeyType={'search'}
          iconPosition={'left'}
          iconName={'search'}
          style={styles.searchInput}
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

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Sizes.regular,
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
