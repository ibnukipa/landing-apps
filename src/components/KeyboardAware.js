/**
 * @format
 * @flow strict-local
 */

import React, { Node, useEffect, useState } from 'react';
import { Keyboard } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export type KeyboardAwareProps = {
  children: Node,
};

const KeyboardAware = (props: KeyboardAwareProps) => {
  const [isKeyboardOpened, setIsKeyboardOpened] = useState(false);
  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', keyboardShow);
    Keyboard.addListener('keyboardDidHide', keyboardHide);

    return () => {
      Keyboard.removeListener('keyboardDidShow', keyboardShow);
      Keyboard.removeListener('keyboardDidHide', keyboardHide);
    };
  }, []);

  const keyboardShow = () => {
    setIsKeyboardOpened(true);
  };

  const keyboardHide = () => {
    setIsKeyboardOpened(false);
  };

  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps={'handled'}
      scrollEnabled={isKeyboardOpened}
      enableOnAndroid
    >
      {props.children}
    </KeyboardAwareScrollView>
  );
};

export default KeyboardAware;
