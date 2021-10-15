import React from "react";
import { View, Text, Platform, Pressable } from "react-native";
import * as Linking from "expo-linking";

const Anchor = (props) => {
  const { href, onPress, children, blank = false } = props;
  const _handlePress = () => {
    if (Platform.OS === "web") {
      window.open(href);
    } else {
      Linking.openURL(href);
    }
    onPress && onPress();
  };
  return (
    <Pressable {...props} onPress={_handlePress} style={[props.style, { cursor: 'pointer' }]} >
      {children}
    </Pressable>
  );
};

export default Anchor;
