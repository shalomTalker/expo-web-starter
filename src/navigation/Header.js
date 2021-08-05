import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { Header as BaseHeader } from "react-native-elements";
import DetailsSection from "../components/DetailsSection";
import { black, white } from "../constants";
import useViewSize from "../hooks/useViewSize";
import NavBar from "./NavBar";

const Header = (props) => {
  const [widthTag] = useViewSize();

  const isMobile = ["sm", "xs"].includes(widthTag);
  const navigation = useNavigation();
  return (
    <BaseHeader
      containerStyle={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
        height: 100,
        borderBottomWidth: 0,
      }}
      placement="left"
      leftComponent={() => (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={{ fontSize: 30, color: white }}>logo</Text>
        </View>
      )}
      centerComponent={<DetailsSection />}
      rightComponent={isMobile ? { icon: "menu", color: "#fff", iconStyle: { color: "#fff" }, onPress: navigation.toggleDrawer } : <NavBar type="top" titleColor={white} />}
    />
  );
};

export default Header;

const styles = StyleSheet.create({});
