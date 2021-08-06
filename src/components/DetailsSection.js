import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { black, white } from "../constants";
import Icon from "./Icon";

const DetailsSection = ({ textColor = "white", ...props }) => {
  return (
    <View {...props}>
      <Text style={{ color: textColor, fontSize: 30 }}>
        052-2210099 <Icon name="phone" color={textColor} size={30} />
      </Text>
    </View>
  );
};

export default DetailsSection;

const styles = StyleSheet.create({});
