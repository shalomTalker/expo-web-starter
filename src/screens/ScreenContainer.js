import React from "react";
import { View, ImageBackground, Text, StyleSheet, Button, ScrollView } from "react-native";
import ContactUs from "../components/ContactUs/index";
import FloatingSocial from "../components/FloatingSocial";
import MapSite from "../components/MapSite";
import useViewSize from "../hooks/useViewSize";
import { Footer } from "../navigation";
const image = { uri: require("../assets/background.jpg") };

const ScreenContainer = ({ children, containerStyle, ...viewProps }) => {
  const [, , widthSize] = useViewSize()
  const isMobile = (range) => widthSize < range;

  return (
    <>
      <ScrollView {...viewProps} showsVerticalScrollIndicator={false} contentContainerStyle={{ ...containerStyle, ...styles.container }}>
        <View>
          {children}
        </View>
        <ContactUs direction={isMobile(1100) ? 'column' : 'row-reverse'} />
        <MapSite direction={isMobile(900) ? 'column' : 'row-reverse'} />

      </ScrollView>

      <FloatingSocial />
    </>
  );
};

const styles = StyleSheet.create({});

export default ScreenContainer;
