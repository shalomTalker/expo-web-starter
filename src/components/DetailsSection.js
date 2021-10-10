import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useTheme } from "../context/StyleContext";
import Icon from "./Icon";

const DetailsSection = ({ textColor, ...props }) => {
  const { primary } = useTheme()
  return (
    <View {...props}>

      <Text style={{ color: textColor || primary, fontSize: 30, padding: 8 }}>
        052-8347079 <Icon name="phone" color={textColor || primary} size={30} />
      </Text>
    </View>
  );
};

export default DetailsSection;

const styles = StyleSheet.create({});
