import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, FAB } from "react-native-elements";
import { white } from "../../constants";
import useViewSize from "../../hooks/useViewSize";
import ScreenContainer from "../ScreenContainer";

const Home = () => {
  const navigation = useNavigation();
  const [, heightSize, widthSize] = useViewSize()

  return (
    <ScreenContainer>
      <View
        style={{ height: heightSize, width: widthSize }}
      ></View>

    </ScreenContainer>
  );
};

export default Home;

const styles = StyleSheet.create({});
