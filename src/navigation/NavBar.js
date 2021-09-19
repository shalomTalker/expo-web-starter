import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useRoute } from '@react-navigation/native';

import Btn from "../components/Btn";
import { black, gray, white } from "../constants";


const tabs = [
  { title: `דף הבית`, name: "home" },
  { title: `אודות`, name: "about" },
  { title: `תחומי עיסוק`, name: "interests" },
  { title: `שירותי המשרד`, name: "office" },
  { title: `צור קשר`, name: "contact" },
];
const NavBar = ({
  style,
  type = "column",
  defaultColor = white,
  insideScreen = false,
  selectedColor = gray }) => {
  const navigation = useNavigation();
  let route = insideScreen ? useRoute() : {};

  // const isSelected = 
  const renderButtons = () => {
    return tabs.map(({ title, name }, i) => {
      const titleTxt = type == "column" ? title : `|  ${title}`;
      const isSelected = route ? route.name === name : {}

      return <Btn
        key={i.toString()}
        title={titleTxt}
        type="clear"
        titleStyle={{ color: isSelected ? selectedColor : defaultColor, fontSize: 15 }}
        onPress={() => navigation.navigate(name)} />;
    });
  };
  return <View style={{ ...style, flexDirection: type === "top" ? "row-reverse" : "column" }}>{renderButtons()}</View>;
};

export default NavBar;

const styles = StyleSheet.create({});
