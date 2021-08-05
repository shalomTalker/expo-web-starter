import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { Button, FAB } from "react-native-elements";
import { white } from "../../constants";
import useViewSize from "../../hooks/useViewSize";
import ScreenContainer from "../ScreenContainer";
const image = { uri: require("../../assets/background.jpg") };

const Home = () => {
  const navigation = useNavigation();
  const [, heightSize] = useViewSize()
  return (
    <ScreenContainer>
      <ImageBackground style={{ height: 500 }} source={image} resizeMode="cover">
      </ImageBackground>

      <View style={{ height: 500 }}>

      </View>
    </ScreenContainer>
  );
};

export default Home;

const styles = StyleSheet.create({});
