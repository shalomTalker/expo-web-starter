import React from "react";
import useViewSize from "../hooks/useViewSize";
import { View } from "react-native";

export default ({ children, style, dividePosition = 2, ...props }) => {
  const [widthTag, heightSize] = useViewSize();
  return (
    <View style={{ ...style, position: "absolute", bottom: heightSize / dividePosition, zIndex: 1000 }} {...props}>
      {children}
    </View>
  );
};
