import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import ScreenContainer from "../ScreenContainer";
import useViewSize from "../../hooks/useViewSize";
import { header_H } from "../../constants";
import { useTheme } from "../../context/StyleContext";
import ContactUs from "../../components/ContactUs";
import { interests } from "../../content";
import Content from "../../components/Article/Content";
import Article from "../../components/Article";


const Interests = ({ navigation, route }) => {
  const { params } = route;
  const [, , widthSize] = useViewSize()

  return (
    <ScreenContainer>
      <View
        style={{ width: widthSize, marginTop: header_H }}
      >
        {
          params &&
          <Article article={interests[params.value]} />
        }

      </View>
    </ScreenContainer>
  );
};

export default Interests;

const styles = StyleSheet.create({

});
