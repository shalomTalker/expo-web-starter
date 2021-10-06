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
  const { c3 } = useTheme()

  return (
    <ScreenContainer>
      <View
        style={{ width: widthSize, marginTop: header_H }}
      >
        <Text style={[styles.mainTitle, { backgroundColor: c3 }]}>{`אודות`}</Text>
        <View style={{ marginHorizontal: 32, flex: 1 }}>

          <Content content={about.about.content} />

        </View>

      </View>
    </ScreenContainer>
  );
};

export default About;

const styles = StyleSheet.create({
  mainTitle: { textAlign: 'right', padding: 30, fontSize: 30 },

});
