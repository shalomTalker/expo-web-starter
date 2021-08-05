import React from 'react';
import { StyleSheet, Text, Platform, View } from 'react-native';
import { Input } from 'react-native-elements';
import DismissKeyboardView from '../hoc/DismissKeyboardView';

import {
  W,
  primary,
  secondary,
  dimGray,
  KLMN,
  gray,
  black,
  yellow,
  G_Styles,
  white,
} from '../constants';

const TextInput = ({
  containerStyle,
  errors = {},
  touched = {},
  name,
  renderErrorMessage = false,
  ...props
}) => {
  const textInputStyle = {
    ...styles.inputStyle,
    color: black,
  };

  const placeholderStyle = {
    ...styles.inputStyle,
    color: gray,
  };
  const touchedAndErrored = Boolean(touched[name] && errors[name]);
  return (
    <View>
      <Input
        inputContainerStyle={{ borderBottomWidth: 0 }}
        inputStyle={{ borderRadius: 4 }}
        renderErrorMessage={touchedAndErrored}
        errorMessage={errors[name]}
        {...props}
      />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  container: {
    margin: 0
  },
  inputStyle: {
    textAlign: 'right',
  },
  errorStyle: {
    fontSize: 14,
    color: 'red',
    paddingHorizontal: 16,
    textAlign: 'right',
  },
});
