import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import Content from "../../components/Article/Content";
import { header_H } from "../../constants";
import { about } from "../../content";
import { useTheme } from "../../context/StyleContext";
import useViewSize from "../../hooks/useViewSize";
import ScreenContainer from "../ScreenContainer";

const About = ({ navigation }) => {
  const [, heightSize, widthSize] = useViewSize()
  const { c3, secondary, primary } = useTheme()

  return (
    <ScreenContainer>
      <Text style={[styles.mainTitle, { backgroundColor: c3, color: secondary }]}>{`אודות המשרד`}</Text>
      <View style={{ flex: 1, marginHorizontal: 80 }}>

        <Content content={about.about.content} />

      </View>

    </ScreenContainer>
  );
};

export default About;

const styles = StyleSheet.create({
  mainTitle: { textAlign: 'right', padding: 30, fontSize: 30, fontWeight: 500 },

});
