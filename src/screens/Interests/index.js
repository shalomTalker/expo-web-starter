import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import ScreenContainer from "../ScreenContainer";
import useViewSize from "../../hooks/useViewSize";

const Interests = ({ navigation }) => {

  const [, heightSize, widthSize] = useViewSize()

  return (
    <ScreenContainer>
      <View
        style={{ height: heightSize, width: widthSize }}
      >
        <Text>Interests Screen</Text>

      </View>
    </ScreenContainer>
  );
};

export default Interests;

const styles = StyleSheet.create({});
