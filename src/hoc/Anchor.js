import React from "react";
import { View, Text, Platform } from "react-native";
import * as Linking from "expo-linking";

const Anchor = (props) => {
  const { href, onPress, children, blank = true } = props;
  const _handlePress = () => {
    if (Platform.OS === "web") {
      window.open(href, blank ? "_blank" : null);
    } else {
      Linking.openURL(href);
    }
    onPress && onPress();
  };
  return (
    <Text {...props} onPress={_handlePress}>
      {children}
    </Text>
  );
};

export default Anchor;
