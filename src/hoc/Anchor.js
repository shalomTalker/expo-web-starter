import React from "react";
import { Platform, Pressable } from "react-native";
import * as Linking from "expo-linking";

const Anchor = (props) => {
  const { href, onPress, children, blank = false } = props;
  const _handlePress = () => {
    if (Platform.OS === "web") {
      window.open(href, null);
    } else {
      Linking.openURL(href, false);
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
