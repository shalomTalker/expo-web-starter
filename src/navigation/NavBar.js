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
  insideScreen = false,
}) => {

  const { gray, primary, c3, secondary } = useTheme()
  const navigation = useNavigation();
  let route = insideScreen ? useRoute() : {};

  const renderButtons = () => {
    return tabs.map(({ title, name, tooltips }, i) => {
      const isSelected = route ? route.name === name : {}

      return <Hoverable key={i.toString()}
      >
        {
          isHover => {
            return (!tooltips) ? <Btn
              containerStyle={{
                backgroundColor: isHover || isSelected ? c3 : 'transparent',
                height: insideScreen ? '100%' : 'auto',
                width: !insideScreen ? '100%' : 120,
                justifyContent: 'center',
                marginHorizontal: 4

              }}
              title={title}
              type="clear"
              titleStyle={{ color: isSelected ? secondary : primary, fontSize: 15, fontWeight: '500' }}
              onPress={() => navigation.navigate(name)} /> : (
              <NavPicker
                isSelected={isSelected}
                insideScreen={insideScreen}
                title={title}
                tooltips={tooltips}
              />
            )
          }
        }
      </Hoverable>

    });

  };


  return <View style={{ ...style, flexDirection: type === "top" ? "row-reverse" : "column", alignItems: 'center' }}>
    <Image source={{ uri: LOGO_HEADER_URI }} style={styles.image} />{renderButtons()}</View>;
};

export default NavBar;


export const NavPicker = ({ insideScreen = false, title, tooltips, isSelected }) => {
  const ref = useRef(null)
  const { gray, primary, c3, secondary } = useTheme()
  console.log(isSelected);
  const navigation = useNavigation();
  return <Hoverable>
    {isHover => {
      return (<Picker
        style={{
          textAlign: 'center',
          paddingVertical: 8,
          borderWidth: 0,
          borderRadius: 4,
          backgroundColor: isHover || isSelected ? c3 : 'transparent',
          fontSize: 17,
          fontWeight: '500',
          color: isSelected ? secondary : primary,
          height: insideScreen ? '100%' : 'auto',
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


const styles = StyleSheet.create({ iamge: { width: 70, height: 70, marginLeft: 16 } })