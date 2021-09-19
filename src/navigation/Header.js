import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, useWindowDimensions, Animated } from "react-native";
import { Header as BaseHeader } from "react-native-elements";
import DetailsSection from "../components/DetailsSection";
import { black, green, white } from "../constants";
import useViewSize from "../hooks/useViewSize";
import NavBar from "./NavBar";

const Header = (props) => {
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
        rightComponent={isMobile ? {
          icon: "menu",
          color: white,
          onPress: navigation.toggleDrawer
        } : <NavBar
          type="top"
          insideScreen
          selectedColor={'lightgreen'}
          style={{
            flex: 1,
            alignItems: 'center'
          }}

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
