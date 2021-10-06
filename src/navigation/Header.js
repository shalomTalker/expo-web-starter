import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, useWindowDimensions, Animated, Pressable, TouchableOpacity } from "react-native";
import { Header as BaseHeader } from "react-native-elements";
import DetailsSection from "../components/DetailsSection";
import Icon from "../components/Icon";
import { useTheme } from "../context/StyleContext";
import useViewSize from "../hooks/useViewSize";
import NavBar from "./NavBar";

const Header = (props) => {
  const { green, white, primary } = useTheme()
  const [widthTag, , widthSize] = useViewSize();

  const isMobile = ["sm", "xs"].includes(widthTag);
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
        leftComponent={<DetailsSection />}
        rightContainerStyle={{ justifyContent: 'center' }}
        rightComponent={isMobile ?
          <TouchableOpacity onPress={navigation.toggleDrawer} >
            <Icon name="menu" size={35} color={'black'} />
          </TouchableOpacity>
          : <NavBar
            type="top"
            insideScreen
            selectedColor={green}
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
