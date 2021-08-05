import React from "react";
import { View, ImageBackground, Text, StyleSheet, Button, ScrollView } from "react-native";
import ContactUs from "../components/ContactUs/index";
import FloatingSocial from "../components/FloatingSocial";
import MapSite from "../components/MapSite";
import useViewSize from "../hooks/useViewSize";
import { Footer } from "../navigation";
const image = { uri: require("../assets/background.jpg") };

const ScreenContainer = ({ children, containerStyle }) => {
  const [, , widthSize] = useViewSize()
  const isMobile = (range) => widthSize < range;

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ ...containerStyle, ...styles.container }}>
        <ImageBackground blurRadius={2} source={image} resizeMode="cover">
          {children}
        </ImageBackground>
        <View style={{ height: 300 }}></View>
        {/* <View> */}
        <ContactUs direction={isMobile(1100) ? 'column' : 'row-reverse'} />
        {/* </View> */}
        <MapSite direction={isMobile(900) ? 'column' : 'row-reverse'} />

      </ScrollView>

      <FloatingSocial />
    </>
  );
};

const styles = StyleSheet.create({});

export default ScreenContainer;
