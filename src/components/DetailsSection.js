import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { white } from "../constants";
import Icon from "./Icon";

const DetailsSection = ({ ...props }) => {
  return (
    <View {...props}>
      <Text style={{ color: white, fontSize: 30 }}>
        052-2210099 <Icon name="phone" color={white} size={30}></Icon>
      </Text>
    </View>
  );
};

export default DetailsSection;

const styles = StyleSheet.create({});
