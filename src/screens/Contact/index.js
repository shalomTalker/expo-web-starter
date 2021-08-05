import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import ScreenContainer from "../ScreenContainer";

const Contact = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Text>Contact Screen</Text>
      <Button title="about" onPress={() => navigation.navigate("about")} />
    </ScreenContainer>
  );
};

export default Contact;

const styles = StyleSheet.create({});
