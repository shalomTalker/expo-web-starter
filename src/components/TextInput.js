import React from 'react';
import { StyleSheet, Platform, View } from 'react-native';
import { Input } from 'react-native-elements';
import { useTheme } from '../context/StyleContext';
import DismissKeyboardView from '../hoc/DismissKeyboardView';


const TextInput = ({
  containerStyle,
  errors = {},
  touched = {},
  name,
  renderErrorMessage = false,
  ...props
}) => {
  const { gray,
    secondary } = useTheme()


  const textInputStyle = {
    ...styles.inputStyle,
    color: secondary,
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
