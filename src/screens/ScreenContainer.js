import React, { useEffect, useRef, useState } from "react";
import { View, ImageBackground, Text, StyleSheet, Button, ScrollView, Animated } from "react-native";
import ArticlesSwipper from "../components/ArticlesSwipper";
import ContactUs from "../components/ContactUs/index";
import FloatingSocial from "../components/FloatingSocial";
import MapSite from "../components/MapSite";
import { header_H } from "../constants";
import { useTheme } from "../context/StyleContext";
import useViewSize from "../hooks/useViewSize";
import { Footer, Header } from "../navigation";

const RANGE_SCROLL = 200;
const START_POS = -120;

const ScreenContainer = ({ children, containerStyle }) => {
  const { primary, c2, c3, secondary } = useTheme()
  const [headerShown, setHeaderShown] = useState(true);
  const translation = useRef(new Animated.Value(0)).current;
  const [, heightSize, widthSize] = useViewSize()
  const isViewSmallerThan = (range) => widthSize < range;

  useEffect(() => {
    Animated.timing(translation, {
      toValue: headerShown ? 0 : START_POS,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [headerShown]);

  const onScroll = (event) => {
    const scrolling = event.nativeEvent.contentOffset.y;

    if (scrolling > RANGE_SCROLL) {
      setHeaderShown(false);
    } else {
      setHeaderShown(true);
    }
  }

  return (
    <>
      <FloatingSocial />

      <Header
        style={{
          height: header_H,
          backgroundColor: c2,
          transform: [
            { translateY: translation },
          ],
        }}
      />
      <ScrollView
        // style={[containerStyle, { paddingTop: header_H }]}
        onScroll={onScroll}
        scrollEventThrottle={1}
        // style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[containerStyle, { paddingTop: header_H, backgroundColor: primary }]}
      >
        {children}
        <View style={{ backgroundColor: primary }}>
          <Text style={[styles.title, { color: secondary }]}>{`מאמרים נוספים`}</Text>
          <ArticlesSwipper direction={isViewSmallerThan(900) ? 'column' : 'row-reverse'} numArticles={isViewSmallerThan(900) ? 1 : 3} />
          <ContactUs direction={isViewSmallerThan(1100) ? 'column' : 'row-reverse'} />
          <MapSite direction={isViewSmallerThan(900) ? 'column' : 'row-reverse'} />

        </View>
      </ScrollView>
    </>

  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginTop: 16,
    fontWeight: 500
  }
});

export default ScreenContainer;
