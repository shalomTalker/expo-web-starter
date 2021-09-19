import React, { useEffect, useRef, useState } from "react";
import { View, ImageBackground, Text, StyleSheet, Button, ScrollView, Animated } from "react-native";
import ArticlesSwipper from "../components/ArticlesSwipper";
import ContactUs from "../components/ContactUs/index";
import FloatingSocial from "../components/FloatingSocial";
import MapSite from "../components/MapSite";
import { white, header_H } from "../constants";
import useViewSize from "../hooks/useViewSize";
import { Footer, Header } from "../navigation";

const RANGE_SCROLL = 200;
const START_POS = -120;
// const HEADER_HEIGHT = 100;

const ScreenContainer = ({ children, containerStyle }) => {
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
      <View style={{ height: heightSize, width: widthSize }} >
        <Header
          style={{
            height: header_H,
            backgroundColor: '#004552e3',
            transform: [
              { translateY: translation },
            ],
          }}
        />
        <ScrollView
          onScroll={onScroll}
          scrollEventThrottle={16}
          // style={{ flex: 1 }}
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
      </View>

      <FloatingSocial />
    </>
  );
};

const styles = StyleSheet.create({});

export default ScreenContainer;
