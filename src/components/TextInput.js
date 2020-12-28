/* @flow */

import React, { useState, useCallback } from 'react';
import {
  TextInput as RNTextInput,
  StyleSheet,
  View,
  TextInputProps as RNTextInputProps,
  Platform,
} from 'react-native';

import { Text } from '@components/Text';
import { Icon } from '@components/Icon';
import { Divider } from '@components/Divider';
import Colors from '@constants/colors';
import Sizes from '@constants/sizes';

export type TextInputProps = {
  title?: string,
  name?: string,
  infoMessage?: string,
  errorMessage?: string,
  iconPosition?: 'left' | 'right',
  iconName?: string,
  iconOnPress?: Function,
  secureTextEntry?: boolean,
  isLight?: boolean,
  isSpace?: boolean,
  isDimmed?: boolean,
  containerStyle?: StyleSheet.Style,
  style?: StyleSheet.Style,
  onClear?: Function,
  onChange?: Function,
  value: string,
} & RNTextInputProps;

const TEXT_PADDING = 8;

export const TextInput = ({
  title,
  name,
  infoMessage,
  errorMessage,
  iconPosition = 'right',
  iconName,
  iconOnPress,
  secureTextEntry,
  isLight,
  isSpace,
  isDimmed,
  containerStyle,
  style,
  onClear,
  onChange,
  value = '',
  ...restProps
}: TextInputProps) => {
  const [isSecure, setIsSecure] = useState(secureTextEntry);
  const hasIconLeft = iconName && iconPosition === 'left';
  const hasIconRight = iconName && iconPosition === 'right';
  const [iconColor] = useState(isLight ? Colors.blueGray : Colors.white);
  const onPressSecure = useCallback(() => setIsSecure(!isSecure), [isSecure]);
  const onPressClear = useCallback(() => {
    onClear();
  }, [onClear]);
  return (
    <View>
      {title && (
        <Text medium color={Colors.primary}>
          {title}
        </Text>
      )}
      <View
        style={[
          styles.container,
          isLight && styles.lightContainer,
          errorMessage && styles.containerError,
          containerStyle,
          isSpace && styles.containerSpace,
          isDimmed && styles.containerDimmed,
        ]}
      >
        {hasIconLeft && (
          <Icon
            color={iconColor}
            onPress={iconOnPress}
            style={styles.iconContainerLeft}
            name={iconName}
          />
        )}
        <RNTextInput
          underlineColorAndroid={'transparent'}
          style={[
            styles.textInput,
            hasIconLeft && styles.textInputHasIconLeft,
            hasIconRight && styles.textInputHasIconRight,
            style,
          ]}
          placeholderTextColor={isLight ? Colors.blueGray100 : Colors.whiteDimmed}
          secureTextEntry={isSecure}
          onChangeText={onChange}
          value={value}
          {...restProps}
        />

        {secureTextEntry && (
          <Icon
            color={iconColor}
            onPress={onPressSecure}
            style={styles.iconContainerRight}
            name={!isSecure ? 'eye-outline' : 'eye-off-outline'}
          />
        )}
        {onClear && value?.length > 1 && (
          <Icon
            color={iconColor}
            onPress={onPressClear}
            style={styles.iconContainerRight}
            name={'close-circle'}
          />
        )}
        {hasIconRight && (
          <Icon
            color={Colors.white}
            onPress={iconOnPress}
            style={styles.iconContainerRight}
            name={iconName}
          />
        )}
      </View>
      <View>
        {errorMessage && (
          <Text numberOfLines={1} size={'small'} color={Colors.red} style={styles.message}>
            {errorMessage}
          </Text>
        )}
        {!errorMessage && infoMessage && (
          <Text numberOfLines={1} size={'small'} color={Colors.grey} style={styles.message}>
            {infoMessage}
          </Text>
        )}
      </View>
      {isSpace && <Divider space={infoMessage ? 25 : 20} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lightContainer: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.blueGray,
  },
  containerDimmed: {
    backgroundColor: Colors.whiteDimmed,
  },
  containerSpace: {
    marginTop: 5,
  },
  containerError: {
    borderColor: Colors.red,
  },
  message: {
    position: 'absolute',
    marginTop: 2,
  },
  textInput: {
    flex: 1,
    fontSize: Sizes.regular,
    paddingBottom: 0,
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    borderWidth: 0,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    ...Platform.select({
      ios: {
        paddingTop: TEXT_PADDING,
        paddingBottom: TEXT_PADDING,
        paddingLeft: TEXT_PADDING,
        paddingRight: TEXT_PADDING,
      },
      android: {
        paddingLeft: TEXT_PADDING,
        paddingRight: TEXT_PADDING,
        paddingTop: TEXT_PADDING - 5,
        paddingBottom: TEXT_PADDING - 5,
      },
    }),
  },
  textInputHasIconLeft: {
    paddingLeft: TEXT_PADDING,
  },
  textInputHasIconRight: {
    paddingRight: TEXT_PADDING,
  },
  iconContainerRight: {
    marginRight: TEXT_PADDING,
  },
  iconContainerLeft: {
    marginLeft: TEXT_PADDING + 2,
  },
});
