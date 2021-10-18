import { useNavigation } from "@react-navigation/native";
import React, { useRef } from "react";
import { Image, StyleSheet, View } from "react-native";
import { useRoute } from '@react-navigation/native';

import Btn from "../components/Btn";
import { useTheme } from "../context/StyleContext";
import { Picker } from "@react-native-picker/picker";
import { LOGO_HEADER_URI, LOGO_URI } from "../constants";
import Hoverable from "../hoc/Hoverable";
import { Switch } from 'react-native-elements';
import { Space } from '../components/Spacing'
import Logo from "../components/Logo";
import Text from "../components/Txt";



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

  const { gray, primary, c3, secondary, isDark, setScheme } = useTheme()
  const navigation = useNavigation();
  let route = insideScreen ? useRoute() : {};

  const renderButtons = () => {
    return tabs.map(({ title, name, tooltips }, i) => {
      const isSelected = route ? route.name === name : {}

      return <Hoverable key={i.toString()} >
        {
          isHover => {
            return (!tooltips) ? <Btn
              containerStyle={{
                backgroundColor: isHover || isSelected ? c3 : 'transparent',
                height: insideScreen ? '100%' : 'auto',
                width: !insideScreen ? '100%' : 'auto',
                justifyContent: 'center',
                marginHorizontal: 4

              }}
              title={title}
              type="clear"
              titleStyle={{ color: isSelected ? secondary : primary, fontSize: 15, fontWeight: '500', fontFamily: 'VarelaRound_400Regular' }}
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


  return <View style={{
    ...style,
    flexDirection: type === "top" ? "row-reverse" : "column", alignItems: 'center'
  }}>
    <Logo isDark={isDark} />
    <View style={{ flexDirection: type === "top" ? "row-reverse" : "column" }}>{renderButtons()} </View>
    {
      Boolean(type !== 'top') &&
      (<View style={[styles.footer, { borderTopColor: primary }]}>
        <Text style={[styles.dark, { color: primary }]}>{`מצב לילה`}</Text>
        <Space width={16} />

        <Switch
          color={isDark ? secondary : primary}
          tintColor={isDark ? primary : secondary}
          value={isDark}
          onValueChange={() => setScheme(isDark ? 'light' : 'dark')} />
      </View>)
    }
  </View>
};

export default NavBar;


export const NavPicker = ({ insideScreen = false, title, tooltips, isSelected }) => {
  const { gray, primary, c3, secondary } = useTheme()
  const navigation = useNavigation();

  return <Hoverable>
    {isHover => {
      return (<Picker
        style={[styles.picker, {
          backgroundColor: isHover || isSelected ? c3 : 'transparent',
          color: isSelected ? secondary : primary,
          height: insideScreen ? '100%' : 'auto',
          width: !insideScreen ? '100%' : 'auto',
          fontFamily: 'VarelaRound_400Regular'
        }]}
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
            style={{ backfaceVisibility: "hidden", fontFamily: 'VarelaRound_400Regular' }}
          />
          {tooltips.map(
            ({ label, value }, f) =>
              <Picker.Item
                key={f.toString()}
                label={label}
                color={secondary}
                value={value}
                index={1 + f}
                style={{ fontFamily: 'VarelaRound_400Regular' }}
              />
          )}
        </>
      </Picker>)
    }}
  </Hoverable>
}


const styles = StyleSheet.create({
  picker: {
    textAlign: 'center',
    paddingVertical: 8,
    borderWidth: 0,
    borderRadius: 4,
    fontSize: 17,
    fontWeight: '500',
  },
  image: { width: 70, height: 70, marginLeft: 16 },
  footer: {
    borderTopWidth: 2,
    paddingTop: 16,
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dark: { fontSize: 17, fontWeight: '400' }
})