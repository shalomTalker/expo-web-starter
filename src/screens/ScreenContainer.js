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
  const { primary, c1, c3 } = useTheme()
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
            backgroundColor: c1,
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
          <View style={{ backgroundColor: primary }}>
            <Text style={{ fontSize: 25, color: c3, textAlign: 'center', textDecorationLine: 'underline', marginTop: 16 }}>{`מאמרים נוספים`}</Text>
            <ArticlesSwipper direction={isViewSmallerThan(900) ? 'column' : 'row-reverse'} numArticles={3} />
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
