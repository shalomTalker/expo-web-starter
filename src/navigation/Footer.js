import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import NavBar from "./NavBar";
import { white } from "../constants";

const Footer = () => {
  const navigation = useNavigation();
  return (
    <View>
      <NavBar titleColor={white} />
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({});
