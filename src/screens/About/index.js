import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import ScreenContainer from "../ScreenContainer";

const About = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Text>About Screen</Text>
      <Button title="home" onPress={() => navigation.navigate("home")} />
    </ScreenContainer>
  );
};

export default About;

const styles = StyleSheet.create({});
