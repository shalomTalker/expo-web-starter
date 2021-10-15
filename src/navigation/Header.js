import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, useWindowDimensions, Animated, Pressable, TouchableOpacity, Image } from "react-native";
import { Header as BaseHeader } from "react-native-elements";
import Icon from "../components/Icon";
import { LOGO_HEADER_URI } from "../constants";
import { useTheme } from "../context/StyleContext";
import Anchor from "../hoc/Anchor";
import useViewSize from "../hooks/useViewSize";
import NavBar from "./NavBar";

const Header = (props) => {
  const { green, white, primary, secondary } = useTheme()
  const [widthTag, , widthSize] = useViewSize();

  const isMobile = ["sm", "xs", "md", 'lg'].includes(widthTag);
  const isSmallMobile = ["xs"].includes(widthTag);
  const navigation = useNavigation();
  return (
    <Animated.View style={[props.style, styles.container]}>

      <BaseHeader
        containerStyle={{
          flex: 1,
          borderBottomWidth: 0,
          backgroundColor: 'transparent',
          alignItems: 'center',
          flexDirection: 'row',
        }}
        placement="left"
        leftComponent={!isSmallMobile &&
          <Anchor href="tel:0508347079">
            <Text style={{ color: primary, fontSize: 20, fontWeight: "400" }}>זמינות 24/7 במקרים דחופים – 050-8347079</Text>
          </Anchor>
        }
        leftContainerStyle={{ justifyContent: 'center' }}
        rightContainerStyle={{ justifyContent: 'center' }}
        rightComponent={isMobile ?
          <TouchableOpacity onPress={navigation.toggleDrawer} >
            <Icon name="menu" size={35} color={primary} />
          </TouchableOpacity>
          : <NavBar
            type="top"
            insideScreen
            selectedColor={secondary}
            defaultColor={primary}
          />}
      />
    </Animated.View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,

  }
});
