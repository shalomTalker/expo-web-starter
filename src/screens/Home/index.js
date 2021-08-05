import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, FAB } from "react-native-elements";
import { white } from "../../constants";
import ScreenContainer from "../ScreenContainer";

const Home = () => {
  const navigation = useNavigation();
  return (
    <ScreenContainer>
      <Text>Home Screen</Text>
      <Button title="about" onPress={() => navigation.navigate("about")} />
      <Text>Home Screen</Text>
      <Button title="about" onPress={() => navigation.navigate("about")} />
      <Text>Home Screen</Text>
      <Button title="about" onPress={() => navigation.navigate("about")} />
      <Text>Home Screen</Text>
      <Button title="about" onPress={() => navigation.navigate("about")} />
      <Text>Home Screen</Text>
      <Button title="about" onPress={() => navigation.navigate("about")} />
      <Text>Home Screen</Text>
      <Button title="about" onPress={() => navigation.navigate("about")} />
      <Text>Home Screen</Text>
      <Button title="about" onPress={() => navigation.navigate("about")} />
      <Text>Home Screen</Text>
      <Button title="about" onPress={() => navigation.navigate("about")} />
      <Text>Home Screen</Text>
      <Button title="about" onPress={() => navigation.navigate("about")} />
      <Text>Home Screen</Text>
      <Button title="about" onPress={() => navigation.navigate("about")} />
      <Text>Home Screen</Text>
      <Button title="about" onPress={() => navigation.navigate("about")} />
      <Text>Home Screen</Text>
      <Button title="about" onPress={() => navigation.navigate("about")} />
      <Text>Home Screen</Text>
      <Button title="about" onPress={() => navigation.navigate("about")} />
    </ScreenContainer>
  );
};

export default Home;

const styles = StyleSheet.create({});
