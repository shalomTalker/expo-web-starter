import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import ScreenContainer from "../ScreenContainer";
import useViewSize from "../../hooks/useViewSize";

const Office = () => {

  const [, heightSize, widthSize] = useViewSize()

  return (
    <ScreenContainer>
      <View
        style={{ height: heightSize, width: widthSize }}
      >
        <Text>Office Screen</Text>
      </View>
    </ScreenContainer>
  );
};

export default Office;

const styles = StyleSheet.create({});
