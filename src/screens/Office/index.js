import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import ScreenContainer from "../ScreenContainer";

const Office = () => {
  return (
    <ScreenContainer>
      <Text>Office Screen</Text>
      <Button title="interests" onPress={() => navigation.navigate("about")} />
    </ScreenContainer>
  );
};

export default Office;

const styles = StyleSheet.create({});
