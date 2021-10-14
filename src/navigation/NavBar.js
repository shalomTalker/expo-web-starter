import { useNavigation } from "@react-navigation/native";
import React, { useRef } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useRoute } from '@react-navigation/native';

import Btn from "../components/Btn";
import { useTheme } from "../context/StyleContext";
import { Picker } from "@react-native-picker/picker";
import { LOGO_HEADER_URI } from "../constants";
import Hoverable from "../hoc/Hoverable";



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

  const { gray, primary, c3, secondary } = useTheme()
  const navigation = useNavigation();
  let route = insideScreen ? useRoute() : {};

  // const isSelected = 
  const renderButtons = () => {
    return tabs.map(({ title, name, tooltips }, i) => {
      const isSelected = route ? route.name === name : {}

      return <Hoverable key={i.toString()}
      >
        {
          isHover => {
            return (!tooltips) ? <Btn
              containerStyle={{
                backgroundColor: isHover ? c3 : 'transparent',
                height: insideScreen ? '100%' : 'auto',
                justifyContent: 'center',
                width: !insideScreen ? '100%' : 120

              }}
              title={title}
              type="clear"
              titleStyle={{ color: isSelected ? selectedColor : defaultColor || primary, fontSize: 15 }}
              onPress={() => navigation.navigate(name)} /> : (
              <NavPicker
                insideScreen={insideScreen}
                title={title}
                tooltips={tooltips}
                defaultColor={defaultColor} />
            )
          }
        }
      </Hoverable>

    });

  };
  return <View style={{ ...style, flexDirection: type === "top" ? "row-reverse" : "column", alignItems: 'center' }}>
    <Image source={{ uri: LOGO_HEADER_URI }} style={{ width: 70, height: 70, marginLeft: 16 }} />{renderButtons()}</View>;
};

export default NavBar;


export const NavPicker = ({ insideScreen = false, title, tooltips, selectedColor, defaultColor }) => {
  const ref = useRef(null)
  const { gray, primary, c3, secondary } = useTheme()
  const navigation = useNavigation();
  let route = insideScreen ? useRoute() : {};
  const isSelected = route ? route.name === name : {};
  return <Hoverable>
    {isHover => {
      return (<Picker

        style={{
          textAlign: 'center',
          borderWidth: 0,
          borderRadius: 4,
          backgroundColor: isHover ? c3 : 'transparent',
          fontSize: 17,
          paddingVertical: 8,
          height: insideScreen ? '100%' : 'auto',
          color: isSelected ? selectedColor : defaultColor,
          width: !insideScreen ? '100%' : 'auto'
        }}
        mode="dropdown"
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
      </Picker>)
    }}
  </Hoverable>
}
