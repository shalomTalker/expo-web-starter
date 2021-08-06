import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, useWindowDimensions, Animated } from "react-native";
import { Header as BaseHeader } from "react-native-elements";
import DetailsSection from "../components/DetailsSection";
import { black, green, white } from "../constants";
import useViewSize from "../hooks/useViewSize";
import NavBar from "./NavBar";

const Header = (props) => {
  const [widthTag] = useViewSize();

  const isMobile = ["sm", "xs"].includes(widthTag);
  const navigation = useNavigation();
  return (
    <Animated.View style={[props.style, styles.container]}>

      <BaseHeader
        backgroundColor="transparent"
        containerStyle={[props.style, styles.container]}
        placement="left"
        leftComponent={() => (
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 30, color: white }}>logo</Text>
          </View>
        )}
        centerComponent={<DetailsSection />}
        rightComponent={isMobile ? {
          icon: "menu",
          color: black, onPress: navigation.toggleDrawer
        } : <NavBar
          type="top"
          titleColor={black}
          insideScreen
          selectedColor={'lightgreen'}

        />}
      />
    </Animated.View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 0,
  }
});
