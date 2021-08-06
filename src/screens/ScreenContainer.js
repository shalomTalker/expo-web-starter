import React, { useEffect, useRef, useState } from "react";
import { View, ImageBackground, Text, StyleSheet, Button, ScrollView, Animated } from "react-native";
import ArticlesSwipper from "../components/ArticlesSwipper";
import ContactUs from "../components/ContactUs/index";
import FloatingSocial from "../components/FloatingSocial";
import MapSite from "../components/MapSite";
import { white } from "../constants";
import useViewSize from "../hooks/useViewSize";
import { Footer, Header } from "../navigation";
const image = { uri: require("../assets/background.jpg") };
const RANGE_SCROLL = 200;
const START_POS = -120;
const HEADER_HEIGHT = 100;

const ScreenContainer = ({ children, containerStyle }) => {
  const [headerShown, setHeaderShown] = useState(true);
  const translation = useRef(new Animated.Value(START_POS)).current;
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
      <ImageBackground source={image} style={{ height: heightSize, width: widthSize }} resizeMode="cover">
        <Header
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: HEADER_HEIGHT,
            backgroundColor: 'tomato',
            transform: [
              { translateY: translation },
            ],
          }}
        />
        <ScrollView
          onScroll={onScroll}
          scrollEventThrottle={16}
          style={{ flex: 1 }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ ...containerStyle, ...styles.container }}
        >
          {children}
          <View style={{ backgroundColor: white }}>
            <ArticlesSwipper direction={isViewSmallerThan(900) ? 'column' : 'row-reverse'} />
            <ContactUs direction={isViewSmallerThan(1100) ? 'column' : 'row-reverse'} />
            <MapSite direction={isViewSmallerThan(900) ? 'column' : 'row-reverse'} />

          </View>
        </ScrollView>
      </ImageBackground>

      <FloatingSocial />
    </>
  );
};

const styles = StyleSheet.create({});

export default ScreenContainer;
