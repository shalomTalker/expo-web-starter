import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Btn from "../components/Btn";
import { black, white } from "../constants";
const tabs = [
  { title: `דף הבית`, name: "home" },
  { title: `אודות`, name: "about" },
  { title: `תחומי עיסוק`, name: "interests" },
  { title: `שירותי המשרד`, name: "office" },
  { title: `צור קשר`, name: "contact" },
];
const NavBar = ({ style, type = "column", titleColor = black }) => {
  const navigation = useNavigation();

  const renderButtons = () => {
    return tabs.map(({ title, name }, i) => {
      const titleTxt = type == "column" ? title : `|  ${title}`;
      return <Btn
        key={i.toString()}
        title={titleTxt}
        type="clear"
        titleStyle={{ color: titleColor, fontSize: 15 }}
        onPress={() => navigation.navigate(name)} />;
    });
  };
  return <View style={{ ...style, justifyContent: "space-around", flexDirection: type === "top" ? "row-reverse" : "column" }}>{renderButtons()}</View>;
};

export default NavBar;

const styles = StyleSheet.create({});
