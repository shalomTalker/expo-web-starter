import { useScrollToTop } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import { View, ImageBackground, StyleSheet, Button, ScrollView, Animated, FlatList } from "react-native";
import ArticlesSwipper from "../components/ArticlesSwipper";
import ContactUs from "../components/ContactUs/index";
import FloatingSocial from "../components/FloatingSocial";
import MapSite from "../components/MapSite";
import { header_H, keyExtractor } from "../constants";
import { useTheme } from "../context/StyleContext";
import useViewSize from "../hooks/useViewSize";
import { Footer, Header } from "../navigation";

import {
  useFonts,
  VarelaRound_400Regular
} from '@expo-google-fonts/varela-round'
import Text from "../components/Txt";





const RANGE_SCROLL = 200;
const START_POS = -120;

const ScreenContainer = ({ children, containerStyle }) => {

  let [fontsLoaded] = useFonts({
    VarelaRound_400Regular,
  });
  const ref = React.useRef(null);

  useScrollToTop(ref);
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


  return fontsLoaded && (
    <View style={{ flex: 1, backgroundColor: primary }}>
      <FloatingSocial />

      <Header
        style={{
          height: header_H,
          backgroundColor: c2,
          // transform: [
          //   { translateY: translation },
          // ],
        }}
      />
      <FlatList
        ref={ref}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        onContentSizeChange={(e) => {
          ref.current?.scrollToOffset({ offest: 0 })
        }}
        onScroll={onScroll}
        data={[{}]}
        contentContainerStyle={[containerStyle]}
        keyExtractor={keyExtractor}
        ListFooterComponent={() => <View style={{ backgroundColor: primary, flex: 1 }}>
          <ContactUs direction={isViewSmallerThan(1100) ? 'column' : 'row-reverse'} />
          <Text style={[styles.title, { color: secondary }]}>{`מאמרים נוספים`}</Text>
          <View style={{ marginHorizontal: 25 }}>
            <ArticlesSwipper direction={isViewSmallerThan(900) ? 'column' : 'row-reverse'} numArticles={isViewSmallerThan(900) ? 1 : 3} />
          </View>
          <MapSite direction={isViewSmallerThan(1100) ? 'column' : 'row'} />
        </View>}
        renderItem={
          ({ item }) => (<View style={{ paddingTop: header_H }}>
            {children}
          </View>)
        }
      />
    </View>

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
      // {/* <ScrollView
      //   ref={ref}
      //   // dont forget usethis
      //   onContentSizeChange={(e) => {
      //     console.log(e)
      //     ref.current?.scrollTo({ y: 0 })
      //   }}
      //   onScroll={onScroll}
      //   scrollEventThrottle={1}
      //   showsVerticalScrollIndicator={false}
      //   showsHorizontalScrollIndicator={false}
      //   contentContainerStyle={[containerStyle, { paddingTop: header_H, }]}
      // >
      //   {children}
      //   {/* <View style={{ backgroundColor: primary, flex: 1 }}>
      //     <Text style={[styles.title, { color: secondary }]}>{`מאמרים נוספים`}</Text>
      //     <ArticlesSwipper direction={isViewSmallerThan(900) ? 'column' : 'row-reverse'} numArticles={isViewSmallerThan(900) ? 1 : 3} />
      //     <ContactUs direction={isViewSmallerThan(1100) ? 'column' : 'row-reverse'} />
      //     <MapSite direction={isViewSmallerThan(900) ? 'column' : 'row-reverse'} />

      //   </View> */}
      //   </ScrollView> * /}
