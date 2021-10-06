import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useRoute } from '@react-navigation/native';

import Btn from "../components/Btn";
import { useTheme } from "../context/StyleContext";
import { Picker } from "@react-native-picker/picker";



const tabs = [
  { title: `דף הבית`, name: "home" },
  {
    title: `אודות`, name: "about"
  },
  {
    title: `תחומי עיסוק`, name: "interests", tooltips: [
      { label: "משפט פלילי", value: "criminal" },
      { label: "משפט צבאי", value: "military" },
      { label: "תעבורה", value: "traffic" },
      { label: "ליטיגציה אזרחית", value: "civilLitigation" },
      { label: "דיני מקרקעין", value: "realEstate" },
    ]
  },
  { title: `שירותי המשרד`, name: "office" },
  { title: `צור קשר`, name: "contact" },
];
const NavBar = ({
  style,
  type = "column",
  defaultColor,
  insideScreen = false,
  selectedColor }) => {

  const { gray, primary, c1, secondary } = useTheme()
  const navigation = useNavigation();
  let route = insideScreen ? useRoute() : {};

  // const isSelected = 
  const renderButtons = () => {
    return tabs.map(({ title, name, tooltips }, i) => {
      const isSelected = route ? route.name === name : {}

      return (!tooltips) ? <Btn
        key={i.toString()}
        title={title}
        type="clear"
        titleStyle={{ color: isSelected ? selectedColor : defaultColor || primary, fontSize: 15 }}
        onPress={() => navigation.navigate(name)} /> : (
        <NavPicker key={i.toString()} insideScreen={insideScreen} title={title} tooltips={tooltips} defaultColor={defaultColor} />
      );
    });
  };
  return <View style={{ ...style, flexDirection: type === "top" ? "row-reverse" : "column" }}>{renderButtons()}</View>;
};

export default NavBar;


export const NavPicker = ({ insideScreen = false, title, tooltips, selectedColor, defaultColor }) => {
  const { gray, primary, c1, secondary } = useTheme()
  const navigation = useNavigation();
  let route = insideScreen ? useRoute() : {};
  const isSelected = route ? route.name === name : {};

  return <Picker

    style={{
      textAlign: 'center',
      borderWidth: 0,
      backgroundColor: 'transparent',
      fontSize: 17,
      color: isSelected ? selectedColor : defaultColor
    }}
    mode="dropdown"
    dropdownIconColor={'black'}
    selectedValue={0}
    onValueChange={(value) => navigation.navigate('interests', { value })}
  >
    <>
      <Picker.Item
        key="default"
        enabled={false}
        label={title}
        value={0}
        index={0}
        color={secondary}
        style={{ backfaceVisibility: "hidden" }}
      />
      {tooltips.map(
        ({ label, value }, f) =>
          <Picker.Item
            key={f.toString()}
            label={label}
            color={secondary}
            value={value}
            index={1 + f}
          />
      )}

    </>

  </Picker>
}

