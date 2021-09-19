import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import useViewSize from "../../hooks/useViewSize";
import ScreenContainer from "../ScreenContainer";

const About = ({ navigation }) => {
  const [, heightSize, widthSize] = useViewSize()

  return (
    <ScreenContainer>
      <View
        style={{ height: heightSize, width: widthSize }}
      >
        <Text>About Screen</Text>

      </View>
    </ScreenContainer>
  );
};

export default About;

const styles = StyleSheet.create({});
