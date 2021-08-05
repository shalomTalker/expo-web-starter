import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import ScreenContainer from "../ScreenContainer";

const Interests = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Text>Interests Screen</Text>
      <Button title="interests" onPress={() => navigation.navigate("about")} />
    </ScreenContainer>
  );
};

export default Interests;

const styles = StyleSheet.create({});
