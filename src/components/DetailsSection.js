import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useTheme } from "../context/StyleContext";
import Icon from "./Icon";
import Anchor from '../hoc/Anchor'

const DetailsSection = ({ textColor, ...props }) => {
  const { primary } = useTheme()
  return (
    <Anchor {...props} href="tel:0508347079" >
      <Text style={{
        color: textColor || primary,
        fontSize: 30,
        padding: 8,

      }}>
        052-8347079 <Icon name="phone" color={textColor || primary} size={30} />
      </Text>
    </Anchor>
  );
};

export default DetailsSection;

const styles = StyleSheet.create({});
