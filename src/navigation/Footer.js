import React from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import NavBar from "./NavBar";
import { useTheme } from "../context/StyleContext";

const Footer = () => {
  const { white } = useTheme()
  const navigation = useNavigation();
  return (
    <View>
      <NavBar titleColor={white} />
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({});
